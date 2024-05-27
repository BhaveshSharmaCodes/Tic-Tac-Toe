var j=2;
			var j1="a",j2="b",j3="c",j4="d",j5="e",j6="f",j7="g",j8="h",j9="i";
			function loc(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo").innerHTML="";
				}else{
					if(j%2==0)
						j1=document.getElementById("demo").innerHTML="x";
					else
						j1=document.getElementById("demo").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
				}
				j=j+1;
			}
			function loca(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo1").innerHTML=" ";
				}else{
					if(j%2==0)
						j2=document.getElementById("demo1").innerHTML="x";
					else
						j2=document.getElementById("demo1").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
					}
				j=j+1;	
			}
			function locat(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo2").innerHTML=" ";
				}else{
					if(j%2==0)
						j3=document.getElementById("demo2").innerHTML="x";
					else
						j3=document.getElementById("demo2").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
					}
				j=j+1;
			}
			function locati(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo3").innerHTML=" ";
				}else{
					if(j%2==0)
						j4=document.getElementById("demo3").innerHTML="x";
					else
						j4=document.getElementById("demo3").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
					}
				j=j+1;
			}
			function locatio(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo4").innerHTML=" ";
				}else{
					if(j%2==0)
						j5=document.getElementById("demo4").innerHTML="x";
					else
						j5=document.getElementById("demo4").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
					}
				j=j+1;
			}
			function locatino(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo5").innerHTML=" ";
				}else{
					if(j%2==0)
						j6=document.getElementById("demo5").innerHTML="x";
					else
						j6=document.getElementById("demo5").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
					}
				j=j+1;
			}
			function locations(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo6").innerHTML=" ";
				}else{
					if(j%2==0)
						j7=document.getElementById("demo6").innerHTML="x";
					else
						j7=document.getElementById("demo6").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
				}
				j=j+1;
			}
			function locationsp(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo7").innerHTML=" ";
				}else{
					if(j%2==0)
						j8=document.getElementById("demo7").innerHTML="x";
					else
						j8=document.getElementById("demo7").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
				}
				j=j+1;	
			}
			function locationspy(){
			let op=funny();
				if(op=="x" || op=="o"){
					document.getElementById("demo8").innerHTML=" ";
				}else{
					if(j%2==0)
						j9=document.getElementById("demo8").innerHTML="x";
					else
						j9=document.getElementById("demo8").innerHTML="o";
					document.getElementById("gone").innerHTML=funny();
				}
				j=j+1;
			}
			function funny(){
				if(j1==j2 && j2==j3)
					return j1;
				else if(j4==j5 && j5==j6)
					return j4;
				else if(j7==j8 && j8==j9)
					return j8;
				else if(j1==j4 && j4==j7)
					return j7;
				else if(j2==j5 && j5==j8)
					return j2;
				else if(j3==j6 && j6==j9)
					return j3;
				else if(j1==j5 && j5==j9)
					return j9;
				else if(j3==j5 && j5==j7)
					return j5;
				else{
					if(j>8)
					return "draw";
					else
					return" ";
				}
			}
			function buffoon(){
				location.reload();
			}