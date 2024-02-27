 function updateTimer() {
                    // Set the date we're counting down to (February 28, 2024 11:40:00)
                    var countDownDate = new Date("February 28, 2024 11:40:00").getTime();

                    // Update the countdown every 1 second
                    var x = setInterval(function() {
                        // Get the current date and time
                        var now = new Date().getTime();

                        // Calculate the distance between now and the countdown date
                        var distance = countDownDate - now;

                        // Calculate days, hours, minutes, and seconds
                        var Days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var Hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        var Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var Seconds = Math.floor((distance % (1000 * 60)) / 1000);

                        // Display the countdown timer
                        document.getElementById("Days").innerHTML = Days;
                        document.getElementById("Hours").innerHTML = Hours;
                        document.getElementById("Minutes").innerHTML = Minutes;
                        document.getElementById("Seconds").innerHTML = Seconds;

                        // If the countdown is over, reset countdown date after 10 days
                        if (distance < 0) {
                            clearInterval(x);
                            countDownDate = new Date();
                            countDownDate.setDate(countDownDate.getDate() + 10);
                            updateTimer(); // Restart the timer
                        }
                    }, 1000);
                }

                // Call the function to start the countdown timer
                updateTimer();