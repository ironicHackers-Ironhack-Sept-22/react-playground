function User(props) {

    return (
        <section className="user">
            <h3>Name: {props.userName}</h3>
            <p>Age: {props.age}</p>
            <p>Occupation: {props.occupation}</p>
        </section>
    );
}


/*************************************/
/* Destructuring function parameters */
/*************************************/

// function User({userName, age, occupation}) {

//     return (
//         <section className="user">
//             <h3>Name: {userName}</h3>
//             <p>Age: {age}</p>
//             <p>Occupation: {occupation}</p>
//         </section>
//     );
// }

export default User;