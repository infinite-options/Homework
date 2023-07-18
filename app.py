from flask import Flask
from numpy import random
import jsonify

app = Flask(__name__)

class Card:
    def __init__(self):
        self.suit_type = ""
        self.card_type = -1
    def get_suit_from_number(self, suit_number):
        suits_dict = {0:"clubs", 1:"diamonds", 2:"hearts", 3:"spades"}
        if(suit_number > 3):
            print("provide a number between 0 to 3")
        else:
            return suits_dict[suit_number]
    def set_suit(self, suit_number):
        self.suit_type = self.get_suit_from_number(suit_number)
    def set_card(self, card_number):
        self.card_type = card_number

def generate_deck():
    deck ={}
    for i in range(4):
        deck[i] = []
        for j in range(1,14):
            deck[i].append(j)
    return deck


def pick_card_for_player(deck):
    card = Card()
    suit_picked = random.choice(list(deck.keys()))
    card_picked = random.choice(deck[suit_picked])
    card.set_suit(suit_picked)
    card.set_card(card_picked)

    deck[suit_picked].remove(card_picked)
    if(len(deck[suit_picked]) == 0):
        deck.pop(suit_picked)
    return {"card":card, "deck":deck}


def print_card(card, card_no):
    print("card"+str(card_no), "->", card.suit_type,":", card.card_type)

def print_players_cards(cards):
    for i in range(len(cards)):
        print(cards[i].suit_type ,
        cards[i].card_type)

# @app.route('/api/get-cards')
@app.route('/api/get-cards', methods=['GET', 'POST'])
def main(number_of_players=6):
    deck = generate_deck()
    updated_deck = deck
    player_cards = {}
    for i in range(number_of_players):
        for j in range(2):
            if(j==0):
                cards = {}
                player_cards[i] = cards
            picked_card = pick_card_for_player(updated_deck)
            cards[j] = str(picked_card["card"].card_type)+"_of_"+picked_card["card"].suit_type
            updated_deck = picked_card["deck"]
            # player_cards["c"+str(j+1)+"_"+str(i)] = card
    # print(player_cards)
    # print_players_cards(player_cards)
    # for key in player_cards.keys():
    #     print(key,player_cards[key])
    #     response_body = {
    #     "name": "Nagato",
    #     "about" :"Hello! I'm a full stack developer that loves python and javascript"
    # }
    # return response_body 
    return player_cards

if __name__ == "__main__":
    # main()
    app.run()

