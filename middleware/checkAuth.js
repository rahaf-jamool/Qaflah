export default function ({  redirect }) {
    if(!localStorage.getItem('UserToken'))
        return redirect("/login");
}