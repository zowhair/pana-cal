import { prompt } from "inquirer";

async function main() {
	await prompt([{ type:"list", name:"project", choices: ["hi", "hello"]}])
}
main()