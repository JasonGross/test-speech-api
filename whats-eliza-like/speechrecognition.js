var delayToSubmitInMilliseconds = 0;

var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;
var recognition;

function updateCountry(index) {
  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
    select_dialect.remove(i);
  }
  if (index === undefined) {
    index = select_language.selectedIndex;
  }
  var list = langs[index];
  for (var i = 1; i < list.length; i++) {
    select_dialect.options.add(new Option(list[i][1], list[i][0]));
  }
  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
}

function preloadLanguages() {
    for (var i = 0; i < langs.length; i++) {
	select_language.options[i] = new Option(langs[i][0], i);
    }
    select_language.selectedIndex = 6;
    updateCountry();
    select_dialect.selectedIndex = 7;
}

function speechRecognitionLoad() {
    // preloadLanguages();
    // select_language.selectedIndex = 6;
    // updateCountry();
    // select_dialect.selectedIndex = 7;
    // syncSettings();
    // showInfo('info_start');
    showInfo('');

    if (!('webkitSpeechRecognition' in window)) {
	upgrade();
    } else {
	start_button.style.display = 'inline-block';
	recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = true;

	recognition.onstart = function() {
	    recognizing = true;
	    // showInfo('info_speak_now');
	    showInfo('');
	    start_img.src = '//jgross.scripts.mit.edu/whats-eliza-like/images/mic-animate.gif';
	};

	recognition.onerror = function(event) {
	    if (event.error == 'no-speech') {
		start_img.src = '//jgross.scripts.mit.edu/whats-eliza-like/images/mic.gif';
		showInfo('info_no_speech');
		ignore_onend = true;
		document.forms.e_form.e_input.readOnly = false;
	    }
	    if (event.error == 'audio-capture') {
		start_img.src = '//jgross.scripts.mit.edu/whats-eliza-like/images/mic.gif';
		showInfo('info_no_microphone');
		ignore_onend = true;
		document.forms.e_form.e_input.readOnly = false;
	    }
	    if (event.error == 'not-allowed') {
		if (event.timeStamp - start_timestamp < 100) {
		    showInfo('info_blocked');
		} else {
		    showInfo('info_denied');
		}
		ignore_onend = true;
		document.forms.e_form.e_input.readOnly = false;
	    }
	};

	recognition.onend = function() {
	    recognizing = false;
	    if (ignore_onend) {
		return;
	    }
	    start_img.src = '//jgross.scripts.mit.edu/whats-eliza-like/images/mic.gif';
	    if (!final_transcript) {
		// showInfo('info_start');
		showInfo('');
		return;
	    }
	    showInfo('');
	    if (window.getSelection) {
		window.getSelection().removeAllRanges();
		var range = document.createRange();
		range.selectNode(document.getElementById('final_span'));
		window.getSelection().addRange(range);
	    }
	};

	var last_call = undefined;

	recognition.onresult = function(event) {
	    var interim_transcript = '';
	    for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
		    final_transcript += event.results[i][0].transcript;
		} else {
		    interim_transcript += event.results[i][0].transcript;
		}
	    }
	    final_transcript = capitalize(final_transcript);
	    document.forms.e_form.e_input.value = final_transcript.trim();
	    if (last_call !== undefined) {
		clearTimeout(last_call);
		last_call = undefined;
	    }
	    if (interim_transcript) {
		document.forms.e_form.e_input.value += ' (' + interim_transcript.trim() + ')'
	    } else {
		delayToSubmitInMilliseconds = document.getElementById('wait_ms').value;
		if (delayToSubmitInMilliseconds >= 0) {
		    last_call = setTimeout(function () { final_transcript = ''; elizaStep(); }, delayToSubmitInMilliseconds);
		}
	    }
	};
    }
}

function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    document.forms.e_form.e_input.readOnly = false;
    return;
  }
  final_transcript = '';
  recognition.lang = select_dialect.value;
  recognition.start();
  ignore_onend = false;
  // final_span.innerHTML = '';
  // interim_span.innerHTML = '';
  document.forms.e_form.e_input.readOnly = true;
  start_img.src = '//jgross.scripts.mit.edu/whats-eliza-like/images/mic-slash.gif';
  showInfo('info_allow');
  start_timestamp = event.timeStamp;
}

function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = 'none';
      }
    }
  }
}

