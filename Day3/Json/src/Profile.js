function Profile() {
    let name = 'siva';
    return (<div>
        <p>Name: {name}</p>
    </div>)
}

export function Picture(){
    let imageURL ='https://www.bing.com/th?id=OIP.PJmiy3UnIfHhDjHx1_mqjwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2';
    return (<div>
        <img src ={imageURL} width ="100" height="100"/>
    </div>)
}

export default Profile;