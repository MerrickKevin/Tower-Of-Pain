#pragma strict


    var speed = 0;
    var jumpForce = 0;
    private var rb : Rigidbody;

function Start () {
    rb = GetComponent(Rigidbody);
    speed = 5;
    jumpForce = 400;
}
function Update(){
if (Input.GetKeyDown("space")){
        var jump = new Vector3(0,jumpForce,0);
        rb.AddForce(jump);
    }

}

function FixedUpdate(){
    
    var moveHorizontal = Input.GetAxis ("Horizontal");
    var moveVertical = Input.GetAxis ("Vertical");
    var movement = new Vector3(moveHorizontal,0,moveVertical);
    rb.AddForce(movement * speed);
}