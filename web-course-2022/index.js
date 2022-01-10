var pageObjects = {};

card1 = {
    title : "Важная информация",
    image : "https://sun9-40.userapi.com/impg/5z8p_GgMYCUPnlU6IeIrtcb9Nf0PwvAu8l9Y-w/qVhUiNtQjn0.jpg?size=145x148&quality=96&sign=56e97b15b9752dd4ca66fc1a7d66cb8d&type=album",
    description : "Не следует, однако забывать, что реализация намеченных плановых заданий требуют определения и уточнения новых предложений. Товарищи! новая модель организационной деятельности представляет собой интересный эксперимент проверки новых предложений. Разнообразный и богатый опыт начало повседневной работы по формированию позиции требуют определения и уточнения соответствующий условий активизации. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации направлений прогрессивного развития."
};

card2 = {
    title : "Музыка",
    image : "https://sun9-32.userapi.com/impf/c846218/v846218845/47fc7/oePA-Uwb9EU.jpg?size=167x169&quality=96&sign=7a0ee0297b59db35a1b2c9498d0621e1&type=album",
    description : "Музыка для развития"
};

card3 = {
    title : "Котик",
    image : "https://www.youloveit.ru/uploads/posts/2017-05/1494861649_youloveit_ru_kot_pushin02.png",
    description : "Большой русский кот Пуша"
}

cards = [card1, card2, card3];

openedCard = 0;


function refreshCards() {
    pageObjects.cardList.html("");
    i = 0
    cards.forEach(element => {
        newButton = $('<button>').prop({
            class : "card",
            innerHTML : element.title,
        });
        newButton.attr('onclick', 'openCard(' + i + ")");
        pageObjects.cardList.append(newButton);
        i++;
    });
    pageObjects.cardList.innerHTML += "";
}

function openDescriptionFrame() {
    pageObjects.cardDescription.removeClass("invisible");
    pageObjects.addCardOuter.addClass("invisible");

    pageObjects.cardDescription.innerHTML
}

function openAddCardFrame() {
    pageObjects.cardDescription.addClass("invisible");
    pageObjects.addCardOuter.removeClass("invisible");
    pageObjects.addCardButton.focus();
}

function createCard() {
    newCard = {
        title : pageObjects.addCardTitle.val(),
        image : pageObjects.addCardImageRef.val(),
        description : pageObjects.addCardDesc.val(),
    }
    cards.push(newCard);

    pageObjects.addCardTitle.val('')
    pageObjects.addCardImageRef.val('')
    pageObjects.addCardDesc.empty()
    console.log(cards);

    refreshCards();

    focusAndOpenCard(cards.length - 1)
}

function focusAndOpenCard(number) {
    card = pageObjects.cardList.children(".card")[number];
    card.click();
    card.focus();
}

function openCard(number) {
    openedCard = number;
    openDescriptionFrame();

    pageObjects.cardDetailedTextInner.html(cards[number].description);
    pageObjects.cardImage.attr("src", cards[number].image);
}

function main() {
    pageObjects = {
        cardList : $(".card_list"),
        cardDescription : $(".card_description"),
        cardDetailedText : $(".card_content_text"),
        cardDetailedTextInner : $(".card_content_text_inner"),
        cardImage : $("#card_content_img"),
        addCardButton : $(".add_card"),
        addCardTitle : $("#add_card_title"),
        addCardDesc : $("#add_card_description"),
        addCardImageRef : $("#add_card_image_ref"),
        addCardOuter : $(".add_card_outer")
    };

    refreshCards();
    openAddCardFrame();
}

function deleteOpenedCard() {
    deleteCard(openedCard);
}

function deleteCard(number) {
    cards.splice(number, 1);
    refreshCards();
    if (number == 0) {
        if (cards.length == 0) {
            openAddCardFrame();
        }
        else {
            focusAndOpenCard(0);
        }
    }
    else {
        focusAndOpenCard(number - 1);
    }
}

$("document").ready(main());

console.log(pageObjects);