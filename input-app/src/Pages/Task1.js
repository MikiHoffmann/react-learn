import NavBar from "../Components/NavBar";
import InputFunctionalComponent from "../Components/Input-functional-component";
import InputClassComponent from "../Components/Input-class-component";
import ButtonClassComponent from "../Components/Button-class-component";

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