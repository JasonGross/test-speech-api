var eliza = new ElizaBot();
var elizaLines = new Array();

var displayCols = 60;
var displayRows = 20;

var settings;

function saveSettings() {
    var f = document.forms.e_form;
    var input_lang = langs[document.getElementById('select_language').selectedIndex];
    if (input_lang === undefined) { input_lang = langs[6]; }
    var input_dialect = input_lang[1+document.getElementById('select_dialect').selectedIndex];
    if (input_dialect === undefined) { input_dialect = input_lang[8]; }
    settings = {
	'speak':f.speak.checked,
	'voice':f.voiceselection.value,
	'input_language':input_lang[0],
	'input_dialect':input_dialect[0],
	'wait_ms':document.getElementById('wait_ms').value
    };
    localStorage['eliza-whats-that-like-current-settings'] = JSON.stringify(settings);
}

function saveByCopy() {
    copyTextToClipboard(elizaLines.join('\n'));
}

function redisplay_and_save() {
    var f = document.forms.e_form;
    localStorage['eliza-whats-that-like-current-log'] = JSON.stringify(elizaLines);
    saveSettings();
    // display nicely
    // (fit to textarea with last line free - reserved for extra line caused by word wrap)
    var temp  = new Array();
    var l = 0;
    for (var i=elizaLines.length-1; i>=0; i--) {
        l += 1 + Math.floor(elizaLines[i].length/displayCols);
        if (l >= displayRows) break
        else temp.push(elizaLines[i]);
    }
    f.e_display.value = temp.reverse().join('\n');
}

function syncSettings() {
    var f = document.forms.e_form;
    if (settings['speak']) {
	f.speak.checked = true;
    }
    if (settings['voice']) {
	f.voiceselection.value = settings['voice'];
    }
    if (settings['wait_ms'] !== undefined && settings['wait_ms'] != '' && settings['wait_ms'] !== null) {
	document.getElementById('wait_ms').value = settings['wait_ms'];
    }
    var input_language_idx = undefined;
    if (settings['input_language'] !== undefined) {
	for (var i = 0; i < langs.length; i++) {
	    if (langs[i][0] == settings['input_language']) {
		input_language_idx = i;
		updateCountry(i);
		break;
	    }
	}
	var input_dialect = settings['input_dialect'];
	if (input_language_idx !== undefined) { document.getElementById('select_language').value = input_language_idx; }
	if (input_dialect !== undefined) {
	    document.getElementById('select_dialect').value = input_dialect;
	}
    }
}

function loadSettings() {
    try {
	settings = JSON.parse(localStorage['eliza-whats-that-like-current-settings']);
	console.log(settings);
	syncSettings();
    } catch (err) {
    }
}

function loadLog() {
    try {
	elizaLines = JSON.parse(localStorage['eliza-whats-that-like-current-log']);
    } catch (err) {
    }
}

function elizaReset() {
    eliza.reset();
    elizaLines.length = 0;
    loadSettings();
    elizaStep();
}

function elizaLoad() {
    var f = document.forms.e_form;
    eliza.reset();
    elizaLines.length = 0;
    loadSettings();
    loadLog();
    redisplay_and_save();
    elizaStep();
}

function maybeSpeak(text) {
    var f = document.forms.e_form;
    if (f.speak.checked) {
	responsiveVoice.speak(text, f.voiceselection.value, {rate: 0.75});
    }
}

function elizaStep() {
    var f = document.forms.e_form;
    var userinput = f.e_input.value;
    if (eliza.quit) {
        f.e_input.value = '';
        if (confirm("This session is over.\nStart over?")) elizaReset();
        f.e_input.focus();
        return;
    }
    else if (userinput != '') {
        var usr = 'YOU:   ' + userinput;
	var eliza_said = eliza.transform(userinput);
        var rpl ='ELIZA: ' + eliza_said;
        elizaLines.push(usr);
        elizaLines.push(rpl);
        redisplay_and_save();
	maybeSpeak(eliza_said);
    }
    else if (elizaLines.length == 0) {
        // no input and no saved lines -> output initial
	var eliza_said = eliza.getInitial();
        var initial = 'ELIZA: ' + eliza_said;
        elizaLines.push(initial);
        localStorage['eliza-whats-that-like-current-log'] = JSON.stringify(elizaLines);
        f.e_display.value = initial + '\n';
	maybeSpeak(eliza_said);
    }
    else if (elizaLines.length == 1) {
	var eliza_said = elizaLines[0].replace('ELIZA: ', '');
	maybeSpeak(eliza_said);
    }
    f.e_input.value = '';
    f.e_input.focus();
}
