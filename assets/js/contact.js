fetch("https://grahamsh-contact.glitch.me/",{mode:"no-cors"});const version=new URL(location.href).searchParams.get("version"),setStatus=(e,t)=>{const n=document.querySelector("#contact-status");n.textContent=e,n.hidden=!1,n.classList.remove([...n.classList].filter(e=>/alert-/.exec(e))[0]),n.classList.add(`alert-${t}`)};document.querySelector("#contact-form").onsubmit=(async e=>{e.preventDefault(),setStatus("Sending...","primary"),document.querySelector("#contact-username").readOnly=!0,document.querySelector("#contact-content").readOnly=!0,document.querySelector("#contact-submit").disabled=!0;const t={version:version,userAgent:navigator.userAgent,language:navigator.language,content:document.querySelector("#contact-content").value,username:document.querySelector("#contact-username").value};try{if(!(await fetch("https://grahamsh-contact.glitch.me/send",{method:"POST",body:JSON.stringify(t)})).ok)throw"";setTimeout(()=>document.querySelector("#contact-submit").disabled=!1,1e4),setStatus("Sent! Thanks for the message.","success")}catch(n){setStatus("Error sending message! Try again?","danger"),document.querySelector("#contact-submit").disabled=!1,document.querySelector("#contact-username").readOnly=!1,document.querySelector("#contact-content").readOnly=!1}}),window.addEventListener("load",()=>document.querySelector("textarea").focus());