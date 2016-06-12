angular.module('starter.services', [])

.factory('Cards', function() {

  var cards = [];

  return {
    all: function() {
      return cards;
    },
    remove: function(card) {
      cards.splice(cards.indexOf(card), 1);
    },
    get: function(cardId) {
      for (var i = 0; i < cards.length; i++) {
        if (cards[i].id === parseInt(cardId)) {
          return cards[i];
        }
      }
      return null;
    },
    // test to see if it works then remove this comment
    addCard: function(card) {
      console.log("running");
      cards.splice(cards.indexOf(card), 1, card)
    }
  };
});
