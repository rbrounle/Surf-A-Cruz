<?php

mysql_connect("localhost", "root", "jacfab13") or die(mysql_error());
mysql_select_db("Surf-A-Cruz") or die(mysql_error());


function getThumbs($beachName, $direction) {
  if ( ! $last ) {
      $last = 86400;
  }
    $thumb = NULL;
    if ( $direction == "up" ) {
        $thumb = 2;
    } else {
        $thumb = 1;
    }
  $query  = "SELECT COUNT(*) FROM Beach_Thumbs where BeachName = '" . $beachName . "' AND TimeStamp > " . ( time() - 86400 ) . " AND Thumb = " . $thumb;
  $result = mysql_query($query);
    $row = mysql_fetch_array($result,MYSQL_ASSOC);
    return $row['COUNT(*)'];
  #  $i=0;
   #while($row = mysql_fetch_array($result, MYSQL_ASSOC)) 
   # {
    #  $id=$row['Media_id'];
    #  echo "[$i] <input type=\"checkbox\" name=\"images_array[]\" value=\"$id\" checked>";
    #  echo "IMG_ID $id";
    
 #  }
        
}

// Make a MySQL Connection

$beach_name=  $_GET["beach"];
$direction = $_GET["direction"];
$callback = $_GET["callback"];

if ( $direction ) {
    $thumb = NULL;
    if ( $direction == "up" ) {
        $thumb = 2;
    } else {
        $thumb = 1;
    }
    $query = "INSERT INTO Beach_Thumbs VALUES ( '', '" . $beach_name . "', NOW(), " . $thumb . ")";
    $result = mysql_query($query);
} else {
    $up = getThumbs($beach_name, "up");
    $down = getThumbs($beach_name, "down");
    $total_thumbs = $up - $down;
    $response = "{'count':" . $total_thumbs. "}";
    if ( $callback ) {
        $response = $callback . "(" . $response . ")";
    }
    echo $response;
}


?>
