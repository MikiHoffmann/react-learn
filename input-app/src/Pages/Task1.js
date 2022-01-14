import NavBar from "../Components/NavBar";
import InputFunctionalComponent from "../Components/task1/Input-functional-component";
import InputClassComponent from "../Components/task1/Input-class-component";
import ButtonClassComponent from "../Components/task1/Button-class-component";

export default function Task1() {
    return (
        <div>
            <NavBar/>
            <div class='main'>
                <InputFunctionalComponent/>
                <InputClassComponent/>
                <ButtonClassComponent/>
            </div>
        </div>
    )
}