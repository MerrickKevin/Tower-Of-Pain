#pragma strict

var player: GameObject;
var offset: Vector3;
function Start () {
    offset = new Vector3 (0,0,0);
    offset = transform.position - player.transform.position;
}

function LateUpdate () {
    transform.position = player.transform.position + offset;
}