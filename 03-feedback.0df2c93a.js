const e=document.querySelector(".feedback-form"),r={email:"",password:""};e.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,password:a}}=e.currentTarget;t.value&&a.value||alert("Всі поля повинні бути заповнені!");return r.email=t.value,r.password=a.value,e.currentTarget.reset(),console.log(r)}));
//# sourceMappingURL=03-feedback.0df2c93a.js.map
