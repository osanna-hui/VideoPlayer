window.onload = function (){
var albums = [];
var title = document.getElementById("title");
var desc = document.getElementById("desc");
var img_link = document.getElementById("img_link");
var create = document.getElementById("create");
var album_display = document.getElementById("album_display");
var video_display = document.getElementById("video_display");
var prev = document.getElementById("prev");
var shuffle = document.getElementById("shuffle");
var next = document.getElementById("next");
    
    var player = {
        index: 0,
        next:function(){
            //console.log(player.source[player.index]);
            if(this.index >= this.source.length-1){
                this.index = 0;
            } else {
                this.index++;
            }
            console.log(this.index);
            console.log(this.source);
            this.play();
        },
        prev:function(){
            if(this.index <= 0){
                this.index = this.source.length-1;
            } else{
                this.index--;
            }
            this.play();
        },
        play:function(){
            this.mediaplayer.src = "https://www.youtube.com/embed/"+player.source[player.index]+"?autoplay=1";
            
        },
        shuffle:function(){
            if(this.index >=0 && this.index <= this.source.length-1){
                this.index = Math.floor((Math.random()*(this.source.length)+1));
                console.log(this.index);
            }
            //generate a random index
            //console.log(this.index);
            
            this.play();
        },
        source:[],
        mediaplayer: document.getElementById("video"),
    };
    
//create new albums function    
    create.onclick = function(){
        console.log("creating new album");
        var another = document.getElementById("another");
        another.innerHTML = "ANOTHER ALBUM?";
        var album_display_title = document.getElementById("album_display_title");
        album_display_title.innerHTML = "Your Album List (Click on album cover to play video)";

        var insert_div = document.createElement("div");
        insert_div.className = "album_div";
        var h3 = document.createElement("h3");
        h3.innerHTML = title.value;
        var new_img = document.createElement("img");
        new_img.src = img_link.value;
        new_img.className = "album_img";
        //new_img.style.cssText = "width:150px; height:auto;";
        var edit = document.createElement("button");
        edit.innerHTML = "Insert Video";
        edit.className = "edit_button";
        var br = document.createElement("br");
        album_display.appendChild(insert_div);
        insert_div.appendChild(h3);
        insert_div.appendChild(new_img);
        insert_div.appendChild(br);
        insert_div.appendChild(edit);
        
        create.id = albums.length;
        edit.id = albums.length;
        new_img.id = albums.length;
        
        var video = {
            title:title.value,
            desc:desc.value,
            img:img_link.value,
            links:[],
        };
        
        albums.push(video);
            console.log(albums);
        
    //edit function   
        edit.onclick = function (){
            console.log("Insert video for album");
            var insert_video_div = document.createElement("div");
            document.body.appendChild(insert_video_div);
            insert_video_div.className = "insert_video_div";
            //insert_video_div.style.cssText = "width:300px; height:200px; position:absolute; left:0; right:0; top:200; buttom:0; margin:auto; background-color:#fff;"
            
            var h3 = document.createElement("h3");
            h3.className = "edit_div_title";
            var span = document.createElement("span");
            span.className = "edit_div_title";
            var index = this.id;
            h3.innerHTML = albums[index].title;
            span.innerHTML = albums[index].desc;
            
            var video_link = document.createElement("input");
            video_link.placeholder = "YouTube Video ID (ex. lqlrru1V69E)";
            var insert_video = document.createElement("button");
            insert_video.innerHTML = "Submit Video";
            insert_video.className = "insert_video_button";

            var close = document.createElement("div");
            close.className ="close";
            close.innerHTML = "x";
            insert_video_div.appendChild(close);
            insert_video_div.appendChild(h3);
            var br = document.createElement("br");
            insert_video_div.appendChild(br);
            insert_video_div.appendChild(span);
            var br2 = document.createElement("br");
            insert_video_div.appendChild(br2);
            insert_video_div.appendChild(video_link);
            var br3 = document.createElement("br");
            insert_video_div.appendChild(br3);
            insert_video_div.appendChild(insert_video);
         
        //close button function
            close.onclick = function(){
                console.log("close edit div");
                document.body.removeChild(insert_video_div);
            }

        //insert video button function
            insert_video.onclick = function (){
                    console.log("inserting video");
                albums[index].links.push(video_link.value);
                //player.source.push(albums[index].links);
                    console.log(player.source);
                document.body.removeChild(insert_video_div);
            }
            
        //to play video
            new_img.onclick = function (){
                                                       
                    console.log("clicked on img");
                console.log(player);
                var index = this.id;
                player.source = (albums[index].links);
                player.index = 0;
                    console.log("play video");
                player.play();

            }
         //prev video       
                
            prev.onclick = function (){
                console.log("prev video");
                player.prev();
            }
         
        //next video

            next.onclick = function (){
                console.log("next video");
                player.next();
            }

            shuffle.onclick = function (){
                console.log("shuffle video");
                player.shuffle();
            }
        };

    }
    

}