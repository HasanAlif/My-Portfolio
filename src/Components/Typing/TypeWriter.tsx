"use client";

import React from "react";

interface TypeWriterProps {
  data: string[];
  typingSpeed?: number; // ms per character when typing (default: 150)
  deletingSpeed?: number; // ms per character when deleting (default: 75)
  pauseTime?: number; // pause after a full word (default: 2000)
}

interface TypeWriterState {
  text: string;
}

class TypeWriter extends React.PureComponent<TypeWriterProps, TypeWriterState> {
  private unmounted: boolean;
  private loopNum: number;
  private isDeleting: boolean;

  constructor(props: TypeWriterProps) {
    super(props);

    this.state = { text: "" };

    this.unmounted = false;
    this.loopNum = 0;
    this.isDeleting = false;

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) return;

    const {
      data: toRotate,
      typingSpeed = 150,
      deletingSpeed = 75,
      pauseTime = 2000,
    } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    const newText = this.isDeleting
      ? fullTxt.substring(0, this.state.text.length - 1)
      : fullTxt.substring(0, this.state.text.length + 1);

    let delta = this.isDeleting ? deletingSpeed : typingSpeed;

    if (!this.isDeleting && newText === fullTxt) {
      delta = pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500; // small delay before next word
    }

    this.setState({ text: newText });

    setTimeout(() => this.tick(), delta);
  }

  render() {
    return (
      <span className="typewriter">
        {this.state.text}
        <span className="animate-pulse">|</span>
      </span>
    );
  }
}

export default TypeWriter;



// import React from "react";

// interface TypeWriterProps {
//   data: string[]; // List of words/phrases to type
// }

// interface TypeWriterState {
//   text: string;
// }

// class TypeWriter extends React.PureComponent<TypeWriterProps, TypeWriterState> {
//   private unmounted: boolean;
//   private loopNum: number;
//   private period: number;
//   private isDeleting: boolean;

//   constructor(props: TypeWriterProps) {
//     super(props);

//     this.state = {
//       text: "",
//     };

//     this.unmounted = false;
//     this.loopNum = 0;
//     this.period = 4000;
//     this.isDeleting = false;

//     this.tick = this.tick.bind(this);
//   }

//   componentDidMount() {
//     this.unmounted = false;
//     this.tick();
//   }

//   componentWillUnmount() {
//     this.unmounted = true;
//   }

//   tick() {
//     if (this.unmounted) {
//       return;
//     }

//     const { data: toRotate } = this.props;
//     const i = this.loopNum % toRotate.length;
//     const fullTxt = toRotate[i];

//     let newText = "";
//     if (this.isDeleting) {
//       newText = fullTxt.substring(0, this.state.text.length - 1);
//     } else {
//       newText = fullTxt.substring(0, this.state.text.length + 1);
//     }

//     let delta = 200 - Math.random() * 100;

//     if (this.isDeleting) {
//       delta = 2;
//     }

//     if (!this.isDeleting && newText === fullTxt) {
//       delta = this.period;
//       this.isDeleting = true;
//     } else if (this.isDeleting && newText === "") {
//       this.isDeleting = false;
//       this.loopNum++;
//       delta = 1000;
//     }

//     this.setState({ text: newText });

//     setTimeout(() => {
//       this.tick();
//     }, delta);
//   }

//   render() {
//     return <span className="typewriter">{this.state.text}</span>;
//   }
// }

// export default TypeWriter;
