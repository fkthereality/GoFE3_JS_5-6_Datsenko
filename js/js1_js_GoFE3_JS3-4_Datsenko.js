

var PageCreator = {
	QUESTION_COUNT: 3,
	ANSWER_COUNT: 3,
	STYLE_CONTENT: "    \
    H1 {                \
        display: block; \
        margin: 0 auto; \
    }                   \
    header {            \
        width: 70%;     \
        margin: 0 auto; \
    }                   \
    ",

	addElement: function (elType, elClass, elParent, elContent) {
		var el = document.createElement(elType);
		
		el.classList.add(elClass);
		if (elContent) {
			el.innerHTML = elContent;
		}

		if (elParent) {
			elParent.appendChild(el);
		}
		
		return el;
	},

	addAnswer: function(question, answer){
		var choice = document.createElement("input");
		choice.name = "test__answer--" + question + "-" + answer;
		choice.type = "checkbox" ;
		choice.value = "" + question + "-" + answer;
		var container = document.createElement("p");
		container.appendChild(choice);

		container.appendChild(document.createTextNode("Вариант ответа № " + answer));

		return container;
	},

	addQuestion: function(number, answerCount){
		var li = document.createElement("li");
		var h2 = document.createElement("h2");
		h2.innerHTML = " Вопрос № " + number;
		li.appendChild(h2);
	var i;
		for (i=1 ; i<=answerCount ; i++){

				li.appendChild(this.addAnswer(number, i));

		}
		return li;
	},


	addTest: function (questionCount){
		var test = document.createElement("div");
		test.classList.add("test");
		var ol = document.createElement("ol");
		test.appendChild(ol);
		for (i=1; i<=questionCount; i++){
			ol.appendChild(this.addQuestion(i, this.ANSWER_COUNT));
		}
	return test;
	},

	createHtml: function(){
		var wrapper = document.createElement('div');
		wrapper.className = "wrapper";

		document.body.appendChild(wrapper);

		var header = document.createElement('div');
		header.classList.add('header');
		wrapper.appendChild(header);

		var h1 = document.createElement("h1");
		h1.innerHTML = "Тест по программированию";
		header.appendChild(h1);
		wrapper.appendChild(this.addTest(this.QUESTION_COUNT));
		var style = document.createElement("style");
		style.innerHTML = this.STYLE_CONTENT;
		document.head.appendChild(style);
	},
};
PageCreator.createHtml();
/*
var myObject = {
	name: 1,
	name2: "value2",
	name3: function(p1, p2) {
		console.log(p1);
		console.log(this.name2);
	}
};
myObject.a = 1;
*/