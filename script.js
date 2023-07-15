 <script>
        function checkNumber() {
            var num = parseInt(document.getElementById("number").value);
            
            // Check if the number is prime or not
            var isPrime = true;
            if (num < 2) {
                isPrime = false;
            } else {
                for (var i = 2; i <= Math.sqrt(num); i++) {
                    if (num % i === 0) {
                        isPrime = false;
                        break;
                    }
                }
            }
            
            // Display prime number or factors
            if (isPrime) {
                document.getElementById("result").innerHTML = "Prime Number";
            } else {
                var factors = [];
                for (var i = 1; i <= num; i++) {
                    if (num % i === 0) {
                        factors.push(i);
                    }
                }
                document.getElementById("result").innerHTML = "Number is not prime. </br>Factors: " + factors.join(", ");
            }
            
            // Check if the number is a perfect square or cube
            var squareRoot = Math.sqrt(num);
            var cubeRoot = Math.cbrt(num);
            var perfectSquare = (squareRoot % 1 === 0);
            var perfectCube = (cubeRoot % 1 === 0);
            
            // Display square or cube number
            if (perfectSquare) {
                document.getElementById("square").innerHTML = "Square Root: " + squareRoot;
            } else {
                document.getElementById("square").innerHTML = "Number is not a Perfect Square";
            }
            
            if (perfectCube) {
                document.getElementById("cube").innerHTML = "Cube Root: " + cubeRoot;
            } else {
                document.getElementById("cube").innerHTML = "Number is not a Perfect Cube";
            }
            
            // Display square and cube of the number
            document.getElementById("squareOfNumber").innerHTML = "Square of the number: " + (num * num);
            document.getElementById("cubeOfNumber").innerHTML = "Cube of the number: " + (num * num * num);
        }
    </script>
