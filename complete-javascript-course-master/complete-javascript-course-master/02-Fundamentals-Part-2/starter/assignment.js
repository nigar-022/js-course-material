// // 0 1 2 3 4 5

// const arr = [0,1,2,3,4,5];

// for(let i =0 ; i< arr.length;i++){
//     setInterval(() => {
//         console.log(arr[i])
//     },2000)

// }
// clearInterval()


// const promise = new Promise((resolve,reject) => {

//     var a = true;

//     setTimeout(() => {
//         if(true){
//             resolve()
//         } else {
//             reject()
//         }

//     }, 2000)
// })
// .then(()=> console.log('sucess'))
// .catch(()=> console.log('error'))

    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .finally(() => console.log('finally'))
    // .catch((err) => console.log(err))


    // async function getData() {
    //     const response = await fetch(
    //       `https://jsonplaceholder.typicode.com/posts?_limit=10`
    //     )
    //     let actualData = await response.json();
    
    //     console.log(actualData) 
    //   }
    //   getData()





// React class component

// import React from "react";
// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((apidata) =>
//         this.setState({
//           data: apidata
//         })
//       )
//       .finally(() => console.log("finally"))
//       .catch((err) => console.log(err));
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//           {this.state.data.map(({ id, title }) => (
//             <li key={id}>
//               <h1>{title}</h1>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default App;


// //import React from "react";
// import "./styles.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ""
//     };
//   }

//   clickHandler = (event) => {
//     event.preventDefault();
//     console.log("button clicked");
//     console.log(this.state.value);
//   };

//   changeHandler = (event) => {
//     this.setState({
//       value: event.target.value
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>{this.state.value}</h1>
//         <input
//           type="text"
//           value={this.state.value}
//           onChange={this.changeHandler}
//         />
//         <button onClick={this.clickHandler}>Submit</button>
//       </div>
//     );
//   }
// }

// export default App;
