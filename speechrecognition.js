var recognizing = false;
var ignore_onend;
var start_timestamp;
var recognition;

function createResultsTable(results) {
    var tbl = document.createElement('table');
    var header = document.createElement('tr');
    var left_head = document.createElement('th');
    left_head.innerText = 'isFinal';
    var rest_head = document.createElement('th');
    rest_head.innerText = 'Transcript';
    header.appendChild(left_head);
    header.appendChild(rest_head);
    tbl.appendChild(header)
    for (const result of results) {
        console.log(result);
        var row = document.createElement('tr');
        var first_cell = document.createElement('td');
        first_cell.innerText = result.isFinal ? 'true' : 'false';
        row.appendChild(first_cell);
        // what are the non-zero elements???
        for (const inner_result of result) {
            var cell = document.createElement('td');
            cell.innerText = inner_result.transcript;
            row.appendChild(cell);
        }
        tbl.appendChild(row);
    }
    document.getElementById('results').prepend(tbl);
}

function speechRecognitionLoad() {
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
            showInfo('');
            start_button.innerText = 'Stop';
	};

	recognition.onerror = function(event) {
	    if (event.error == 'no-speech') {
                start_button.innerText = 'Start';
		showInfo('info_no_speech');
		ignore_onend = true;
	    }
	    if (event.error == 'audio-capture') {
                start_button.innerText = 'Start';
		showInfo('info_no_microphone');
		ignore_onend = true;
	    }
	    if (event.error == 'not-allowed') {
		if (event.timeStamp - start_timestamp < 100) {
		    showInfo('info_blocked');
		} else {
		    showInfo('info_denied');
		}
		ignore_onend = true;
	    }
	};

	recognition.onend = function() {
	    recognizing = false;
	    if (ignore_onend) {
		return;
	    }
            start_button.innerText = 'Start';
	    showInfo('');
	};

	var last_call = undefined;

	recognition.onresult = function(event) {
            createResultsTable(event.results);
	};
    }
}

function upgrade() {
    start_button.style.visibility = 'hidden';
    showInfo('info_upgrade');
}

function startButton(event) {
    if (recognizing) {
        recognition.stop();
        return;
    }
    recognition.lang = '';
    recognition.start();
    ignore_onend = false;
    start_button.innerText = 'Start';
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
