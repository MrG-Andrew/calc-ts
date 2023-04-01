let input = document.getElementById("inputBox") as HTMLInputElement;
let buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("button");

let mainString: string = "";
let arr: HTMLButtonElement[] = Array.from(buttons);
arr.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    if (target && typeof target.innerHTML === "string") {
      console.log("in main if");
      console.log(target.innerHTML);
      if (target.innerHTML === "=") {
        console.log("if");
        mainString = eval(mainString);
        input.value = mainString;
      } else if (target.innerHTML === "AC") {
        console.log("ac");
        mainString = "";
        input.value = mainString;
      } else if (target.innerHTML === "DEL") {
        console.log("del");
        mainString = mainString.substring(0, mainString.length - 1);
      } else {
        console.log("in else");
        mainString += target.innerHTML;
        input.value = mainString;
      }
    }
  });
});
