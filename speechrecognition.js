var delayToSubmitInMilliseconds = 0;

var results = [];
var on_results_updated = (function () {});
var recognizing = false;
var ignore_onend;
var start_timestamp;
var recognition;

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
	    start_img.src = '//people.csail.mit.edu/jgross/tmp/test-speech-api/mic-animate.gif';
	};

	recognition.onerror = function(event) {
	    if (event.error == 'no-speech') {
		start_img.src = '//people.csail.mit.edu/jgross/tmp/test-speech-api/mic.gif';
		showInfo('info_no_speech');
		ignore_onend = true;
		document.forms.e_form.e_input.readOnly = false;
	    }
	    if (event.error == 'audio-capture') {
		start_img.src = '//people.csail.mit.edu/jgross/tmp/test-speech-api/mic.gif';
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
	    start_img.src = '//people.csail.mit.edu/jgross/tmp/test-speech-api/mic.gif';
	    if (!final_transcript) {
		// showInfo('info_start');
		showInfo('');
		return;
	    }
	    showInfo('');
	};

	var last_call = undefined;

	recognition.onresult = function(event) {
            on_results_updated(event.results);
          /*
	    for (var i = event.resultIndex; i < event.results.length; ++i) {
		if (event.results[i].isFinal) {
		    final_transcript += event.results[i][0].transcript;
		} else {
		    interim_transcript += event.results[i][0].transcript;
		}
	    }
*/
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

function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
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

