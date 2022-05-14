var JSNES=function(t){if(this.opts={ui:JSNES.DummyUI,swfPath:"lib/",preferredFrameRate:60,fpsInterval:500,showDisplay:!0,emulateSound:!1,sampleRate:44100,CPU_FREQ_NTSC:1789772.5,CPU_FREQ_PAL:1773447.4},void 0!==t)for(var s in this.opts)void 0!==t[s]&&(this.opts[s]=t[s]);this.frameTime=1e3/this.opts.preferredFrameRate,this.ui=new this.opts.ui(this),this.cpu=new JSNES.CPU(this),this.ppu=new JSNES.PPU(this),this.papu=new JSNES.PAPU(this),this.mmap=null,this.keyboard=new JSNES.Keyboard,this.ui.updateStatus("Ready to load a ROM.")};JSNES.VERSION="<%= version %>",JSNES.prototype={isRunning:!1,fpsFrameCount:0,romData:null,reset:function(){null!==this.mmap&&this.mmap.reset(),this.cpu.reset(),this.ppu.reset(),this.papu.reset()},start:function(){var t=this;null!==this.rom&&this.rom.valid?this.isRunning||(this.isRunning=!0,this.frameInterval=setInterval(function(){t.frame()},this.frameTime),this.resetFps(),this.printFps(),this.fpsInterval=setInterval(function(){t.printFps()},this.opts.fpsInterval)):this.ui.updateStatus("There is no ROM loaded, or it is invalid.")},frame:function(){this.ppu.startFrame();var t=0,s=this.opts.emulateSound,i=this.cpu,e=this.ppu,a=this.papu;t:for(;;)for(0===i.cyclesToHalt?(t=i.emulate(),s&&a.clockFrameCounter(t),t*=3):8<i.cyclesToHalt?(t=24,s&&a.clockFrameCounter(8),i.cyclesToHalt-=8):(t=3*i.cyclesToHalt,s&&a.clockFrameCounter(i.cyclesToHalt),i.cyclesToHalt=0);0<t;t--){if(e.curX===e.spr0HitX&&1===e.f_spVisibility&&e.scanline-21===e.spr0HitY&&e.setStatusFlag(e.STATUS_SPRITE0HIT,!0),e.requestEndFrame&&(e.nmiCounter--,0===e.nmiCounter)){e.requestEndFrame=!1,e.startVBlank();break t}e.curX++,341===e.curX&&(e.curX=0,e.endScanline())}this.fpsFrameCount++},printFps:function(){var t=+new Date,s="Running";this.lastFpsTime&&(s+=": "+(this.fpsFrameCount/((t-this.lastFpsTime)/1e3)).toFixed(2)+" FPS"),this.ui.updateStatus(s),this.fpsFrameCount=0,this.lastFpsTime=t},stop:function(){clearInterval(this.frameInterval),clearInterval(this.fpsInterval),this.isRunning=!1},reloadRom:function(){null!==this.romData&&this.loadRom(this.romData)},loadRom:function(t){if(this.isRunning&&this.stop(),this.ui.updateStatus("Loading ROM..."),this.rom=new JSNES.ROM(this),this.rom.load(t),this.rom.valid){if(this.reset(),this.mmap=this.rom.createMapper(),!this.mmap)return;this.mmap.loadROM(),this.ppu.setMirroring(this.rom.getMirroringType()),this.romData=t,this.ui.updateStatus("Successfully loaded. Ready to be started.")}else this.ui.updateStatus("Invalid ROM!");return this.rom.valid},resetFps:function(){this.lastFpsTime=null,this.fpsFrameCount=0},setFramerate:function(t){this.opts.preferredFrameRate=t,this.frameTime=1e3/t,this.papu.setSampleRate(this.opts.sampleRate,!1)},toJSON:function(){return{romData:this.romData,cpu:this.cpu.toJSON(),mmap:this.mmap.toJSON(),ppu:this.ppu.toJSON()}},fromJSON:function(t){this.loadRom(t.romData),this.cpu.fromJSON(t.cpu),this.mmap.fromJSON(t.mmap),this.ppu.fromJSON(t.ppu)}};