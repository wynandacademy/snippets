<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Wynand.academy - Code snippets</title>

        <?php

	      $whitelist = array(
	          '127.0.0.1',
	          '::1'
	      );

	      //If local
	      if(in_array($_SERVER['REMOTE_ADDR'], $whitelist)){
	        echo ' <link rel="stylesheet" href="./assets/main.css" />';
	      } else {
	        echo ' <link rel="stylesheet" href="assets/main.css" />';
	      }

	     ?>
    </head>
    <body>
    
    </body>
</html>