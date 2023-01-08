!function(){var e=document.querySelector(".feedback-form"),r={email:"",password:""};e.addEventListener("submit",(function(e){e.preventDefault();var a=e.currentTarget.elements,t=a.email,l=a.password;t.value&&l.value||alert("Всі поля повинні бути заповнені!");return r.email=t.value,r.password=l.value,e.currentTarget.reset(),console.log(r)}))}();
//# sourceMappingURL=03-feedback.2106da57.js.map
