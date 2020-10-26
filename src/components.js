import React from "react";
import {Button, Card, Container, Row} from "react-bootstrap"
import $ from "jquery";

let dataCollection = [
  {
    message:"Happy are those that live in the moment for there is no tomorrow",
    author:"Collin KIpchir",
    bodyBg:"coral"
    
  },
  {
    message:
      "Do you know what happend to a toad when it is struck by lighting? The same thing that happens to everything else.",
    author: "Storm",
    bodyBg:"lightgreen"
  },
  {
    message: "I'm the guy who does his job. You must be the other guy.",
    author: "Sgt. Sean Dignam",
    bodyBg:"aquamarine"
  },
  {
    message: "With great power comes great responsibility.",
    author: "Peter Parker",
    bodyBg:"gold"
  },
  {
    message: "If you're nothing without the suite, then you shouldn't have it",
    author: "Tony Stark",
    bodyBg:"tomato"
  },
  {
    message:
      "Never forget who you are, the rest of the world will not. Wear it like an armour and it can never be used to hurt you.",
    author: "Tyrion Lannis",
    bodyBg:"grey"
  },
  {
    message:
      "Any man who says 'I am king' is no true king. I'll make you understand that when I have won the war for you.",
    author: "Tywin Lannister",
    bodyBg:"brown"
  },
  {
    message:
      "When you play the game of thrones, you win or you die. There is no middle ground",
    author: "Cersei Lannister",
    bodyBg:"#ed959e"
  },
  {
    message:
      "Power resides where men believe it resides. It's a trick. A shadow on the wall. And a very small man can cast a very large shadow",
    author: "Varys",
    bodyBg:"violet"
  },
  {
    message:
      "When you cut a man's tongue , you are not proving him a liar, you are only telling the world that you are afraid to hear what he might say",
    author: "Tyrion Lannister",
    bodyBg:"#a3f0a3"
  },
  {
    message:
      "The greatest fools are often times more clever than the men who laugh at them",
    author: "Tywin Lannister",
    bodyBg:"orange"
  },
  {
    message:
      "A reader lives a thousand lives before he dies, the man who doesn't lives only one",
    author: "Jojen Reed",
    bodyBg:"#8e9fd1"
  },
  {
    message:
      "If you think this has a happy ending for you, you haven't been paying attention",
    author: "Ramsay Bolton",
    bodyBg:"milkwhite"
  },
  {
    message:
      "Things aren't always what they seem.Our fears can play tricks on us, making us afraid to change course, afraid to move on, but usually, hidden behind our fears are second chances waiting to be seized, second chances at life, at glory, at family, at love.",
    author: "Barry Allen",
    bodyBg:"azure"
  },
  {
    message:
      "Every warrior must learn the simple truth, that pain is inevitable and suffering is optional.",
    author: "Malcom Merlyn",
    bodyBg:"magenta"
  },
  {
    message: "The essence of heroism is to die so that others can live.",
    author: "Oliver Queen",
    bodyBg:"plime"
  },
  {
    count:5
  }
];
let data = {
  boxBgColor: "white",
  messageFontColor: "black",
  authorFontColor: "white",
  authroBgColor: "navyblue",
  message:
    "Life is what happens when you're planning the match was fair but the best team lost",
  author: "TheBigDog",
  cardBgColor: "darkgrey"
};
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataCollection[0],
      infor: dataCollection,
      count: dataCollection[dataCollection.length-1].count,
    };
    this.updateContent = this.updateContent.bind(this);
  }
  componentDidMount() {
    $("#next").mousedown(function() {
      $(this).addClass("translate");
    });
    $("#next").mouseup(function() {
      $(this).removeClass("translate");
    });
  }
  updateContent() {
    document.title = this.state.data.author;
    if(this.state.count >= this.state.infor.length-2){
      return this.setState({
        count:0
      });
    }
    this.setState({
      data:this.state.infor[this.state.count],
      count:this.state.count+1
    });
  }
  render() {
    let styleBox = {
      backgroundColor: this.state.data.bodyBg,
      width: "400px",
      padding: "15px",
      alignSelf: "center",
      borderRadius: "25px",
      marginTop: "12.5%"
    };
    return (
      <Container 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: "5%"
        }}
      >
        <Card style={styleBox}>
          <Card.Body>
            <blockquote className="blockquote mb-0" id="quote-box">
              <p className="text" id="text"> " {this.state.data.message} " </p>
              <Row>
                <span className="author" id="author">{this.state.data.author}</span>
              </Row>
              <Row>
                <Button onClick={this.updateContent} className="next" variant="primary" id="new-quote">
                  Next Quote
                </Button>
                <a className="share link twitter-share-button" href={`https://www.twitter.com/intent/tweet?text=${this.state.data.message}`} id="tweet-quote">
                  <img
                    src="https://image.flaticon.com/icons/png/512/23/23931.png"
                    width="20px"
                    alt="twitter"
                  />
                </a>
              </Row>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default Box;
