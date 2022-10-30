import React from "react";
import '../TodoList';

function TodoList(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };