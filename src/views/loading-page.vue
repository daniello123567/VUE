<script setup>
import {ref} from 'vue';
const trulu = ref(false);
setTimeout(()=>trulu.value = true,3000)

</script>

<template>
   <div class="ss">
    <img  src="../assets/github-2.gif" alt="github"/>
     <p className='Author'>Daniel&apos;s Github.</p>
    <div className="progress">
      <div className="color"></div>
    </div>
    <div v-if="trulu" class="kk">
      <p>preparing your browser for my magic</p>
      <div class="smile">
      <svg role="img" aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00" class="smiley" viewBox="0 0 128 128" width="128px" height="128px">
	<defs>
		<clipPath id="smiley-eyes">
			<circle class="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
			<circle class="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
		</clipPath>
		<linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#000" />
			<stop offset="100%" stop-color="#fff" />
		</linearGradient>
		<mask id="smiley-mask">
			<rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
		</mask>
	</defs>
	<g stroke-linecap="round" stroke-width="12" stroke-dasharray="175.93 351.86">
		<g>
			<rect fill="hsl(193,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
			<g fill="none" stroke="hsl(193,90%,50%)">
				<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
				<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
			</g>
		</g>
		<g mask="url(#smiley-mask)">
			<rect fill="hsl(223,90%,50%)" width="128" height="64" clip-path="url(#smiley-eyes)" />
			<g fill="none" stroke="hsl(223,90%,50%)">
				<circle class="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
				<circle class="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
			</g>
		</g>
	</g>
</svg>
</div>
       </div>


   </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
img{
  width: 5em;
  background: white;
  border-radius: .9em;
  margin-bottom: 1em;
  position: relative;
  animation: bounce 2s none;
  transition: animation ease-in;

}
.ss{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: bodyBlick 4s infinite ;
}
/* .progress{
  position: relative;
  height: 10px;
  width: 17em;
  border: 2px solid #f4a261;
  border-radius: 15px;
} */
/* .progress .color{
  position: absolute;
  background-color: black;
  width: 0px;
  height: 10px;
  border-radius: 15px;
  animation: progres 4s infinite linear;
} */
@keyframes progres{
  0%{
    width: 0%;
  }
  25%{
      width: 50%;
  }
  50%{
      width: 75%;
  }
  75%{
      width: 85%;
  }
  100%{
      width: 100%;
  }
};
.kk{
  color: white;
  font-size: .7rem;
}

@keyframes bodyBlick {
   0%{
    background: deeppink;
   }
   20%{
    background-color: darkolivegreen;
   }
   40%{
    background-color: dodgerblue;
   }
   80%{
    background: darkgoldenrod;
   }
   100%{
    background: darkmagenta ;
   }
}
.Author {
  font-weight: 400;
  color: white;
  letter-spacing: .2em;
  margin-bottom: 1em;
  animation:letterSp 2s none;
}
@keyframes letterSp {
    0%{
      letter-spacing: -.3em ;
    }
    10%{
     letter-spacing: -.3.5em;
    }
    20%{
      letter-spacing:-.0em ;
    }

}
@keyframes bounce {
   0%{
      top: -.2em
   }
}


:root {
	--hue: 223;
	--bg: hsl(var(--hue),90%,90%);
	--fg: hsl(var(--hue),90%,10%);
	--trans-dur: 0.3s;
	font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
}
.smile{
  width: max-content;
  height: max-content;
  margin-inline: auto;
  margin-top: 1em;
}
.smiley {
	width: 5em;
	height: 5em;
}
.smiley__eye1,
.smiley__eye2,
.smiley__mouth1,
.smiley__mouth2 {
	animation: eye1 3s ease-in-out infinite;
}
.smiley__eye1,
.smiley__eye2 {
	transform-origin: 64px 64px;
}
.smiley__eye2 {
	animation-name: eye2;
}
.smiley__mouth1 {
	animation-name: mouth1;
}
.smiley__mouth2 {
	animation-name: mouth2;
	visibility: hidden;
}


@media (prefers-color-scheme: dark) {
	:root {
		--bg: hsl(var(--hue),90%,10%);
		--fg: hsl(var(--hue),90%,90%);
	}
}


@keyframes eye1 {
	from {
		transform: rotate(-260deg) translate(0,-56px);
	}
	50%,
	60% {
		animation-timing-function: cubic-bezier(0.17,0,0.58,1);
		transform: rotate(-40deg) translate(0,-56px) scale(1);
	}
	to {
		transform: rotate(225deg) translate(0,-56px) scale(0.35);
	}
}
@keyframes eye2 {
	from {
		transform: rotate(-260deg) translate(0,-56px);
	}
	50% {
		transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
	}
	52.5% {
		transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1,0);
	}
	55%,
	70% {
		animation-timing-function: cubic-bezier(0,0,0.28,1);
		transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
	}
	to {
		transform: rotate(150deg) translate(0,-56px) scale(0.4);
	}
}
@keyframes eyeBlink {
	from,
	25%,
	75%,
	to {
		transform: scaleY(1);
	}
	50% {
		transform: scaleY(0);
	}
}
@keyframes mouth1 {
	from {
		animation-timing-function: ease-in;
		stroke-dasharray: 0 351.86;
		stroke-dashoffset: 0;
	}
	25% {
		animation-timing-function: ease-out;
		stroke-dasharray: 175.93 351.86;
		stroke-dashoffset: 0;
	}
	50% {
		animation-timing-function: steps(1,start);
		stroke-dasharray: 175.93 351.86;
		stroke-dashoffset: -175.93;
		visibility: visible;
	}
	75%,
	to {
		visibility: hidden;
	}
}
@keyframes mouth2 {
	from {
		animation-timing-function: steps(1,end);
		visibility: hidden;
	}
	50% {
		animation-timing-function: ease-in-out;
		visibility: visible;
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: -351.86;
	}
}


</style>
