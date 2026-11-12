<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Anchor OS: test</title>
		<style>
			body {
				background-color: #0c0c0c;
				color: #00ffff;
				font-family: 'Courier New', Courier, monospace;
				padding: 0px;
				margin: 0;
			}
			.stand {
				margin-right: 0px;
				user-select: none;
			}
			.cli {
				background-color: #0c0c0c;
				font-family: 'Courier New', Courier, monospace;
				padding: 0px;
				margin: 0;
			}
			#in {
				background: transparent;
				border: none;
				font-family: inherit;
				font-size: 1rem;
				flex: 1;
				outline: none;
				color: #00ffff;
				margin: 1.5px;
			}
			.line {
				display: flex;
				align-items: center;
			}
			#endCommand {
				white-space: pre-wrap;
			}
		</style>
	</head>
	<body>
		<div class="cli">
			<div id="endCommand"></div>
			<div class="line">
				<span class="stand">Anchor_OS:guest-></span>
				<input type="text" id="in" autocomplete="off">
			</div>
		</div>
		<script>
			//HTML connect(???)
			const history = document.querySelector("#endCommand");
			const input = document.querySelector("#in");
			const stand = document.querySelector(".stand");
			//now times
			const nowTime = ()=> {
				const times = new Date();
				return [
					times.getFullYear(),
					times.getMonth() + 1,
					times.getDate()
				].join("/");
			};
			//path to array
			const path = (path, usrName = "")=> {
				let ret = path.split("/");
				ret[0] = ((usrName === "")?"guest":usrName);
				return ret;
			};
			//bar function
			const bar = (length, level)=> {
				let i;
				let ret = "[";
				for(i = 0; i < length; i++){
					if(i < level){
						ret += "+";
					}else{
						ret += "-";
					}
				}
				ret += "]";
				return ret;
			};
			//log generate
			const log = (log)=> {
				const height = document.body.scrollHeight;
				history.textContent += log + "\n";
				window.scrollBy(0, document.body.scrollHeight - height);
				return;
			};
			//command execute
			const commandExe = (cmd)=> {
				//not written
				return;
			};
			//init...?
			const init = ()=> {
				return;
			};
			//command call
			input.addEventListener("keydown",(press)=> {
					if(press.key === "Enter"){
						const cmd = input.value.trim();
						if(cmd === "") return;
						log(`${document.querySelector(".stand").textContent} ${cmd}`);
						commandExe(cmd);
						input.value = "";
					}
					return;
				}
			);
			document.addEventListener("click",()=> {
					input.focus();
					return;
				}
			);
			//data array
			class Darray {
				constructor() {
					this.datas = {
						name: [],
						data: []
					};
				}
				add(name, dat) {
					const isSuccess = (this.iget(name) == -1);
					if(isSuccess){
						this.datas.name.push(name);
						this.datas.data.push(dat);
					}
					return isSuccess;
				}
				del(name){
					const index = this.iget(name);
					if(index != -1){
						this.datas.data.splice(index,1);
						this.datas.name.splice(index,1);
					}
					return;
				}
				dget(name){
					const index = this.iget(name);
					return {
						data: this.datas.data[index],
						notFound: index == -1
					};
				}
				repl(name,dat){ 
					const index = this.iget(name);
					if(index != -1){
						this.datas.data[index] = dat;
					}
					return index != -1;
				}
				iget(name){
					return this.datas.name.indexOf(name);
				}
			}
			//account
			class Account {
				constructor(accountName, accountPassword, accountAuth){
					this.name = accountName;
					this.pass = accountPassword;
					this.auth = accountAuth;
				}
			}
			//oh.. not completed
			class AnchorAccountSystem {
				constructor(accounts){
						this.account = accounts;
					return;
				}
			}
			//test log
			log("hello world");
			log(bar(100,12));
		</script>
	</body>
</html>