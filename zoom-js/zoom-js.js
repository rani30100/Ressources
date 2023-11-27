
    function imageZoom(imgID, resultID) {
        var img, lens, result, cx, cy;
		img = document.getElementById(imgID).firstElementChild; // Utilisez firstElementChild pour accéder à la première balise enfant (l'élément img)
        result = document.getElementById(resultID);

        /* create lens: */
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /* insert lens: */
        img.parentElement.insertBefore(lens, img);
        /* calculate the ratio between result DIV and lens: */
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /* set background properties for the result DIV: */
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
        /* hide the result div initially: */
        result.style.visibility = "hidden";
        /* execute a function when someone moves the cursor over the image, or the lens: */
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /* and also for touch screens: */
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);

        function moveLens(e) {
            var pos, x, y;
            /* prevent any other actions that may occur when moving over the image: */
            e.preventDefault();
            /* get the cursor's x and y positions: */
            pos = getCursorPos(e);
            /* calculate the position of the lens: */
            x = pos.x - (lens.offsetWidth / 2);
            y = pos.y - (lens.offsetHeight / 2);
            /* prevent the lens from being positioned outside the image: */
            if (x > img.width - lens.offsetWidth) {
                x = img.width - lens.offsetWidth;
            }
            if (x < 0) {
                x = 0;
            }
            if (y > img.height - lens.offsetHeight) {
                y = img.height - lens.offsetHeight;
            }
            if (y < 0) {
                y = 0;
            }
            /* set the position of the lens: */
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /* set the position of the result div to the right of the cursor with 10px separation: */
            result.style.left = x + lens.offsetWidth  + "px";
            result.style.top = y + "px"; // Adjust the vertical position for a 10px space
            /* display what the lens "sees": */
            result.style.visibility = "visible";
            result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
        }

        function getCursorPos(e) {
            var a, x = 0, y = 0;
            e = e || window.event;
            /* get the x and y positions of the image: */
            a = img.getBoundingClientRect();
            /* calculate the cursor's x and y coordinates, relative to the image: */
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /* consider any page scrolling: */
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return {
                x: x,
                y: y
            };
        }
    }


    // Initiate zoom effect:
    imageZoom("myImageZoomed", "myresult");
