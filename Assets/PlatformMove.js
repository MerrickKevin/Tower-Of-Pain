#pragma strict

    private var rb: Rigidbody;
    var speed = 0;
function Start () {
    rb = GetComponent(Rigidbody);
}

function FixedUpdate () {
    var moveForce = new Vector3(2,0,0);
    rb.AddForce(moveForce);
}