export async function ajax (props){
let {url,cbSuccess} = props;

try {
    let res = await fetch(url),
json = await res.json();

if (!res.ok) throw { status: res.status, statusText: res.statusText };

cbSuccess(json);
} catch (err) {
    let message = err.statusText || "Ocurrio un error al acceder a la API";

    document.getElementById("main").innerHTML=`
    <div class= "error">
    <p>Error ${err.status}: ${message}</p>
    </div>
    `;
document.querySelector(".loader").style.display= "none";
    console.log(err);
}
}