/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


pc.script.attribute('playerSpeed', 'number', 30, {displayName: 'Player Speed'});

pc.script.create('movement', function (app) {
    // Creates a new Movement instance
    var Movement = function (entity) {
        this.entity = entity;
        this.force = new pc.Vec3();
    };

    Movement.prototype = {
        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            var forward = this.entity.forward;
            var right = this.entity.right;

            var x = 0;
            var z = 0;

            if (app.keyboard.isPressed(pc.KEY_A)) {
                x -= right.x;
                z -= right.z;
            }

            if (app.keyboard.isPressed(pc.KEY_D)) {
                x += right.x;
                z += right.z;
            }

            if (app.keyboard.isPressed(pc.KEY_W)) {
                x += forward.x;
                z += forward.z;
            }

            if (app.keyboard.isPressed(pc.KEY_S)) {
                x -= forward.x;
                z -= forward.z;
            }

            if (x !== 0 || z !== 0) {
                x *= dt;
                z *= dt;

                this.force.set(x, 0, z).normalize().scale((this.playerSpeed));
                this.entity.rigidbody.applyForce(this.force);
            }
        }
    };

    return Movement;

});