let spinner = ["|", "/", "-", "\\","/", "-","|"]
let timer = 100
for(let e of spinner){
  setTimeout(()=>{
    process.stdout.write(`\r${e}  `)
  }, timer)
  timer +=200
}




