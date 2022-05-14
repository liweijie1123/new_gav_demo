JSNES.PPU=function(t){this.nes=t,this.vramMem=null,this.spriteMem=null,this.vramAddress=null,this.vramTmpAddress=null,this.vramBufferedReadValue=null,this.firstWrite=null,this.sramAddress=null,this.currentMirroring=null,this.requestEndFrame=null,this.nmiOk=null,this.dummyCycleToggle=null,this.validTileData=null,this.nmiCounter=null,this.scanlineAlreadyRendered=null,this.f_nmiOnVblank=null,this.f_spriteSize=null,this.f_bgPatternTable=null,this.f_spPatternTable=null,this.f_addrInc=null,this.f_nTblAddress=null,this.f_color=null,this.f_spVisibility=null,this.f_bgVisibility=null,this.f_spClipping=null,this.f_bgClipping=null,this.f_dispType=null,this.cntFV=null,this.cntV=null,this.cntH=null,this.cntVT=null,this.cntHT=null,this.regFV=null,this.regV=null,this.regH=null,this.regVT=null,this.regHT=null,this.regFH=null,this.regS=null,this.curNt=null,this.attrib=null,this.buffer=null,this.prevBuffer=null,this.bgbuffer=null,this.pixrendered=null,this.validTileData=null,this.scantile=null,this.scanline=null,this.lastRenderedScanline=null,this.curX=null,this.sprX=null,this.sprY=null,this.sprTile=null,this.sprCol=null,this.vertFlip=null,this.horiFlip=null,this.bgPriority=null,this.spr0HitX=null,this.spr0HitY=null,this.hitSpr0=null,this.sprPalette=null,this.imgPalette=null,this.ptTile=null,this.ntable1=null,this.currentMirroring=null,this.nameTable=null,this.vramMirrorTable=null,this.palTable=null,this.showSpr0Hit=!1,this.clipToTvSize=!0,this.reset()},JSNES.PPU.prototype={STATUS_VRAMWRITE:4,STATUS_SLSPRITECOUNT:5,STATUS_SPRITE0HIT:6,STATUS_VBLANK:7,reset:function(){var t;for(this.vramMem=new Array(32768),this.spriteMem=new Array(256),t=0;t<this.vramMem.length;t++)this.vramMem[t]=0;for(t=0;t<this.spriteMem.length;t++)this.spriteMem[t]=0;for(this.vramAddress=null,this.vramTmpAddress=null,this.vramBufferedReadValue=0,this.firstWrite=!0,this.sramAddress=0,this.currentMirroring=-1,this.requestEndFrame=!1,this.nmiOk=!1,this.dummyCycleToggle=!1,this.validTileData=!1,this.nmiCounter=0,this.scanlineAlreadyRendered=null,this.f_nmiOnVblank=0,this.f_spriteSize=0,this.f_bgPatternTable=0,this.f_spPatternTable=0,this.f_addrInc=0,this.f_nTblAddress=0,this.f_color=0,this.f_spVisibility=0,this.f_bgVisibility=0,this.f_spClipping=0,this.f_bgClipping=0,this.f_dispType=0,this.cntFV=0,this.cntV=0,this.cntH=0,this.cntVT=0,this.cntHT=0,this.regFV=0,this.regV=0,this.regH=0,this.regVT=0,this.regHT=0,this.regFH=0,this.regS=0,this.curNt=null,this.attrib=new Array(32),this.buffer=new Array(61440),this.prevBuffer=new Array(61440),this.bgbuffer=new Array(61440),this.pixrendered=new Array(61440),this.validTileData=null,this.scantile=new Array(32),this.scanline=0,this.lastRenderedScanline=-1,this.curX=0,this.sprX=new Array(64),this.sprY=new Array(64),this.sprTile=new Array(64),this.sprCol=new Array(64),this.vertFlip=new Array(64),this.horiFlip=new Array(64),this.bgPriority=new Array(64),this.spr0HitX=0,this.spr0HitY=0,this.hitSpr0=!1,this.sprPalette=new Array(16),this.imgPalette=new Array(16),this.ptTile=new Array(512),t=0;t<512;t++)this.ptTile[t]=new JSNES.PPU.Tile;for(this.ntable1=new Array(4),this.currentMirroring=-1,this.nameTable=new Array(4),t=0;t<4;t++)this.nameTable[t]=new JSNES.PPU.NameTable(32,32,"Nt"+t);for(this.vramMirrorTable=new Array(32768),t=0;t<32768;t++)this.vramMirrorTable[t]=t;this.palTable=new JSNES.PPU.PaletteTable,this.palTable.loadNTSCPalette(),this.updateControlReg1(0),this.updateControlReg2(0)},setMirroring:function(t){if(t!=this.currentMirroring){this.currentMirroring=t,this.triggerRendering(),null===this.vramMirrorTable&&(this.vramMirrorTable=new Array(32768));for(var i=0;i<32768;i++)this.vramMirrorTable[i]=i;this.defineMirrorRegion(16160,16128,32),this.defineMirrorRegion(16192,16128,32),this.defineMirrorRegion(16256,16128,32),this.defineMirrorRegion(16320,16128,32),this.defineMirrorRegion(12288,8192,3840),this.defineMirrorRegion(16384,0,16384),t==this.nes.rom.HORIZONTAL_MIRRORING?(this.ntable1[0]=0,this.ntable1[1]=0,this.ntable1[2]=1,this.ntable1[3]=1,this.defineMirrorRegion(9216,8192,1024),this.defineMirrorRegion(11264,10240,1024)):t==this.nes.rom.VERTICAL_MIRRORING?(this.ntable1[0]=0,this.ntable1[1]=1,this.ntable1[2]=0,this.ntable1[3]=1,this.defineMirrorRegion(10240,8192,1024),this.defineMirrorRegion(11264,9216,1024)):t==this.nes.rom.SINGLESCREEN_MIRRORING?(this.ntable1[0]=0,this.ntable1[1]=0,this.ntable1[2]=0,this.ntable1[3]=0,this.defineMirrorRegion(9216,8192,1024),this.defineMirrorRegion(10240,8192,1024),this.defineMirrorRegion(11264,8192,1024)):t==this.nes.rom.SINGLESCREEN_MIRRORING2?(this.ntable1[0]=1,this.ntable1[1]=1,this.ntable1[2]=1,this.ntable1[3]=1,this.defineMirrorRegion(9216,9216,1024),this.defineMirrorRegion(10240,9216,1024),this.defineMirrorRegion(11264,9216,1024)):(this.ntable1[0]=0,this.ntable1[1]=1,this.ntable1[2]=2,this.ntable1[3]=3)}},defineMirrorRegion:function(t,i,s){for(var e=0;e<s;e++)this.vramMirrorTable[t+e]=i+e},startVBlank:function(){this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI),this.lastRenderedScanline<239&&this.renderFramePartially(this.lastRenderedScanline+1,240-this.lastRenderedScanline),this.endFrame(),this.lastRenderedScanline=-1},endScanline:function(){switch(this.scanline){case 19:this.dummyCycleToggle&&(this.curX=1,this.dummyCycleToggle=!this.dummyCycleToggle);break;case 20:this.setStatusFlag(this.STATUS_VBLANK,!1),this.setStatusFlag(this.STATUS_SPRITE0HIT,!1),this.hitSpr0=!1,this.spr0HitX=-1,this.spr0HitY=-1,1!=this.f_bgVisibility&&1!=this.f_spVisibility||(this.cntFV=this.regFV,this.cntV=this.regV,this.cntH=this.regH,this.cntVT=this.regVT,this.cntHT=this.regHT,1==this.f_bgVisibility&&this.renderBgScanline(!1,0)),1==this.f_bgVisibility&&1==this.f_spVisibility&&this.checkSprite0(0),1!=this.f_bgVisibility&&1!=this.f_spVisibility||this.nes.mmap.clockIrqCounter();break;case 261:this.setStatusFlag(this.STATUS_VBLANK,!0),this.requestEndFrame=!0,this.nmiCounter=9,this.scanline=-1;break;default:21<=this.scanline&&this.scanline<=260&&(1==this.f_bgVisibility&&(this.scanlineAlreadyRendered||(this.cntHT=this.regHT,this.cntH=this.regH,this.renderBgScanline(!0,this.scanline+1-21)),this.scanlineAlreadyRendered=!1,this.hitSpr0||1!=this.f_spVisibility||-7<=this.sprX[0]&&this.sprX[0]<256&&this.sprY[0]+1<=this.scanline-20&&this.sprY[0]+1+(0===this.f_spriteSize?8:16)>=this.scanline-20&&this.checkSprite0(this.scanline-20)&&(this.hitSpr0=!0)),1!=this.f_bgVisibility&&1!=this.f_spVisibility||this.nes.mmap.clockIrqCounter())}this.scanline++,this.regsToAddress(),this.cntsToAddress()},startFrame:function(){var t=0;if(0===this.f_dispType)t=this.imgPalette[0];else switch(this.f_color){case 0:t=0;break;case 1:t=65280;break;case 2:t=16711680;break;case 3:t=0;break;case 4:t=255;break;default:t=0}for(var i=this.buffer,s=0;s<61440;s++)i[s]=t;var e=this.pixrendered;for(s=0;s<e.length;s++)e[s]=65},endFrame:function(){var t,i,s,e=this.buffer;if(this.showSpr0Hit){if(0<=this.sprX[0]&&this.sprX[0]<256&&0<=this.sprY[0]&&this.sprY[0]<240){for(t=0;t<256;t++)e[(this.sprY[0]<<8)+t]=16733525;for(t=0;t<240;t++)e[(t<<8)+this.sprX[0]]=16733525}if(0<=this.spr0HitX&&this.spr0HitX<256&&0<=this.spr0HitY&&this.spr0HitY<240){for(t=0;t<256;t++)e[(this.spr0HitY<<8)+t]=5635925;for(t=0;t<240;t++)e[(t<<8)+this.spr0HitX]=5635925}}if(this.clipToTvSize||0===this.f_bgClipping||0===this.f_spClipping)for(s=0;s<240;s++)for(i=0;i<8;i++)e[(s<<8)+i]=0;if(this.clipToTvSize)for(s=0;s<240;s++)for(i=0;i<8;i++)e[255+(s<<8)-i]=0;if(this.clipToTvSize)for(s=0;s<8;s++)for(i=0;i<256;i++)e[(s<<8)+i]=0,e[(239-s<<8)+i]=0;this.nes.opts.showDisplay&&this.nes.ui.writeFrame(e,this.prevBuffer)},updateControlReg1:function(t){this.triggerRendering(),this.f_nmiOnVblank=t>>7&1,this.f_spriteSize=t>>5&1,this.f_bgPatternTable=t>>4&1,this.f_spPatternTable=t>>3&1,this.f_addrInc=t>>2&1,this.f_nTblAddress=3&t,this.regV=t>>1&1,this.regH=1&t,this.regS=t>>4&1},updateControlReg2:function(t){this.triggerRendering(),this.f_color=t>>5&7,this.f_spVisibility=t>>4&1,this.f_bgVisibility=t>>3&1,this.f_spClipping=t>>2&1,this.f_bgClipping=t>>1&1,this.f_dispType=1&t,0===this.f_dispType&&this.palTable.setEmphasis(this.f_color),this.updatePalettes()},setStatusFlag:function(t,i){t=1<<t;this.nes.cpu.mem[8194]=this.nes.cpu.mem[8194]&255-t|(i?t:0)},readStatusRegister:function(){var t=this.nes.cpu.mem[8194];return this.firstWrite=!0,this.setStatusFlag(this.STATUS_VBLANK,!1),t},writeSRAMAddress:function(t){this.sramAddress=t},sramLoad:function(){return this.spriteMem[this.sramAddress]},sramWrite:function(t){this.spriteMem[this.sramAddress]=t,this.spriteRamWriteUpdate(this.sramAddress,t),this.sramAddress++,this.sramAddress%=256},scrollWrite:function(t){this.triggerRendering(),this.firstWrite?(this.regHT=t>>3&31,this.regFH=7&t):(this.regFV=7&t,this.regVT=t>>3&31),this.firstWrite=!this.firstWrite},writeVRAMAddress:function(t){this.firstWrite?(this.regFV=t>>4&3,this.regV=t>>3&1,this.regH=t>>2&1,this.regVT=7&this.regVT|(3&t)<<3):(this.triggerRendering(),this.regVT=24&this.regVT|t>>5&7,this.regHT=31&t,this.cntFV=this.regFV,this.cntV=this.regV,this.cntH=this.regH,this.cntVT=this.regVT,this.cntHT=this.regHT,this.checkSprite0(this.scanline-20)),this.firstWrite=!this.firstWrite,this.cntsToAddress(),this.vramAddress<8192&&this.nes.mmap.latchAccess(this.vramAddress)},vramLoad:function(){var t;return this.cntsToAddress(),this.regsToAddress(),this.vramAddress<=16127?(t=this.vramBufferedReadValue,this.vramAddress<8192?this.vramBufferedReadValue=this.vramMem[this.vramAddress]:this.vramBufferedReadValue=this.mirroredLoad(this.vramAddress),this.vramAddress<8192&&this.nes.mmap.latchAccess(this.vramAddress)):t=this.mirroredLoad(this.vramAddress),this.vramAddress+=1==this.f_addrInc?32:1,this.cntsFromAddress(),this.regsFromAddress(),t},vramWrite:function(t){this.triggerRendering(),this.cntsToAddress(),this.regsToAddress(),8192<=this.vramAddress?this.mirroredWrite(this.vramAddress,t):(this.writeMem(this.vramAddress,t),this.nes.mmap.latchAccess(this.vramAddress)),this.vramAddress+=1==this.f_addrInc?32:1,this.regsFromAddress(),this.cntsFromAddress()},sramDMA:function(t){for(var i,s=256*t,e=this.sramAddress;e<256;e++)i=this.nes.cpu.mem[s+e],this.spriteMem[e]=i,this.spriteRamWriteUpdate(e,i);this.nes.cpu.haltCycles(513)},regsFromAddress:function(){var t=this.vramTmpAddress>>8&255;this.regFV=t>>4&7,this.regV=t>>3&1,this.regH=t>>2&1,this.regVT=7&this.regVT|(3&t)<<3,t=255&this.vramTmpAddress,this.regVT=24&this.regVT|t>>5&7,this.regHT=31&t},cntsFromAddress:function(){var t=this.vramAddress>>8&255;this.cntFV=t>>4&3,this.cntV=t>>3&1,this.cntH=t>>2&1,this.cntVT=7&this.cntVT|(3&t)<<3,t=255&this.vramAddress,this.cntVT=24&this.cntVT|t>>5&7,this.cntHT=31&t},regsToAddress:function(){var t=(7&this.regFV)<<4,i=(t=(t=(t|=(1&this.regV)<<3)|(1&this.regH)<<2)|this.regVT>>3&3,(7&this.regVT)<<5);i|=31&this.regHT,this.vramTmpAddress=32767&(t<<8|i)},cntsToAddress:function(){var t=(7&this.cntFV)<<4,i=(t=(t=(t|=(1&this.cntV)<<3)|(1&this.cntH)<<2)|this.cntVT>>3&3,(7&this.cntVT)<<5);i|=31&this.cntHT,this.vramAddress=32767&(t<<8|i)},incTileCounter:function(t){for(var i=t;0!==i;i--)this.cntHT++,32==this.cntHT&&(this.cntHT=0,this.cntVT++,30<=this.cntVT&&(this.cntH++,2==this.cntH&&(this.cntH=0,this.cntV++,2==this.cntV&&(this.cntV=0,this.cntFV++,this.cntFV&=7))))},mirroredLoad:function(t){return this.vramMem[this.vramMirrorTable[t]]},mirroredWrite:function(t,i){16128<=t&&t<16160?16128==t||16144==t?(this.writeMem(16128,i),this.writeMem(16144,i)):16132==t||16148==t?(this.writeMem(16132,i),this.writeMem(16148,i)):16136==t||16152==t?(this.writeMem(16136,i),this.writeMem(16152,i)):16140==t||16156==t?(this.writeMem(16140,i),this.writeMem(16156,i)):this.writeMem(t,i):t<this.vramMirrorTable.length?this.writeMem(this.vramMirrorTable[t],i):alert("Invalid VRAM address: "+t.toString(16))},triggerRendering:function(){21<=this.scanline&&this.scanline<=260&&(this.renderFramePartially(this.lastRenderedScanline+1,this.scanline-21-this.lastRenderedScanline),this.lastRenderedScanline=this.scanline-21)},renderFramePartially:function(t,i){if(1==this.f_spVisibility&&this.renderSpritesPartially(t,i,!0),1==this.f_bgVisibility)for(var s=t+i<<8,e=(61440<s&&(s=61440),this.buffer),r=this.bgbuffer,h=this.pixrendered,n=t<<8;n<s;n++)255<h[n]&&(e[n]=r[n]);1==this.f_spVisibility&&this.renderSpritesPartially(t,i,!1),this.validTileData=!1},renderBgScanline:function(t,i){var s=0===this.regS?0:256,e=(i<<8)-this.regFH;if(this.curNt=this.ntable1[this.cntV+this.cntV+this.cntH],this.cntHT=this.regHT,this.cntH=this.regH,this.curNt=this.ntable1[this.cntV+this.cntV+this.cntH],i<240&&0<=i-this.cntFV){for(var r,h,n,l,a=this.cntFV<<3,c=this.scantile,p=this.attrib,b=this.ptTile,d=this.nameTable,g=this.imgPalette,u=this.pixrendered,f=t?this.bgbuffer:this.buffer,T=0;T<32;T++){if(0<=i){this.validTileData?(h=(r=c[T]).pix,n=p[T]):(h=(r=b[s+d[this.curNt].getTileIndex(this.cntHT,this.cntVT)]).pix,n=d[this.curNt].getAttrib(this.cntHT,this.cntVT),c[T]=r,p[T]=n);var o=0,m=(T<<3)-this.regFH;if(-8<m)if(m<0&&(e-=m,o=-m),r.opaque[this.cntFV])for(;o<8;o++)f[e]=g[h[a+o]+n],u[e]|=256,e++;else for(;o<8;o++)0!==(l=h[a+o])&&(f[e]=g[l+n],u[e]|=256),e++}32==++this.cntHT&&(this.cntHT=0,this.cntH++,this.cntH%=2,this.curNt=this.ntable1[(this.cntV<<1)+this.cntH])}this.validTileData=!0}this.cntFV++,8==this.cntFV&&(this.cntFV=0,this.cntVT++,30==this.cntVT?(this.cntVT=0,this.cntV++,this.cntV%=2,this.curNt=this.ntable1[(this.cntV<<1)+this.cntH]):32==this.cntVT&&(this.cntVT=0),this.validTileData=!1)},renderSpritesPartially:function(t,i,s){if(1===this.f_spVisibility)for(var e,r,h,n=0;n<64;n++)this.bgPriority[n]==s&&0<=this.sprX[n]&&this.sprX[n]<256&&this.sprY[n]+8>=t&&this.sprY[n]<t+i&&(0===this.f_spriteSize?(this.srcy1=0,this.srcy2=8,this.sprY[n]<t&&(this.srcy1=t-this.sprY[n]-1),this.sprY[n]+8>t+i&&(this.srcy2=t+i-this.sprY[n]+1),(0===this.f_spPatternTable?this.ptTile[this.sprTile[n]]:this.ptTile[this.sprTile[n]+256]).render(this.buffer,0,this.srcy1,8,this.srcy2,this.sprX[n],this.sprY[n]+1,this.sprCol[n],this.sprPalette,this.horiFlip[n],this.vertFlip[n],n,this.pixrendered)):(0!=(1&(e=this.sprTile[n]))&&(e=this.sprTile[n]-1+256),r=0,this.sprY[n]<t&&(r=t-this.sprY[n]-1),this.sprY[n]+(h=8)>t+i&&(h=t+i-this.sprY[n]),this.ptTile[e+(this.vertFlip[n]?1:0)].render(this.buffer,0,r,8,h,this.sprX[n],this.sprY[n]+1,this.sprCol[n],this.sprPalette,this.horiFlip[n],this.vertFlip[n],n,this.pixrendered),r=0,this.sprY[n]+(h=8)<t&&(r=t-(this.sprY[n]+8+1)),this.sprY[n]+16>t+i&&(h=t+i-(this.sprY[n]+8)),this.ptTile[e+(this.vertFlip[n]?0:1)].render(this.buffer,0,r,8,h,this.sprX[n],this.sprY[n]+1+8,this.sprCol[n],this.sprPalette,this.horiFlip[n],this.vertFlip[n],n,this.pixrendered)))},checkSprite0:function(t){this.spr0HitX=-1,this.spr0HitY=-1;var i,s,e,r,h=0===this.f_spPatternTable?0:256,n=this.sprX[0],l=this.sprY[0]+1;if(0===this.f_spriteSize){if(l<=t&&t<l+8&&-7<=n&&n<256)if(s=this.ptTile[this.sprTile[0]+h],this.sprCol[0],this.bgPriority[0],i=this.vertFlip[0]?7-(t-l):t-l,i*=8,r=256*t+n,this.horiFlip[0])for(e=7;0<=e;e--){if(0<=n&&n<256&&0<=r&&r<61440&&0!==this.pixrendered[r]&&0!==s.pix[i+e])return this.spr0HitX=r%256,this.spr0HitY=t,!0;n++,r++}else for(e=0;e<8;e++){if(0<=n&&n<256&&0<=r&&r<61440&&0!==this.pixrendered[r]&&0!==s.pix[i+e])return this.spr0HitX=r%256,this.spr0HitY=t,!0;n++,r++}}else if(l<=t&&t<l+16&&-7<=n&&n<256)if((i=this.vertFlip[0]?15-(t-l):t-l)<8?s=this.ptTile[this.sprTile[0]+(this.vertFlip[0]?1:0)+(0!=(1&this.sprTile[0])?255:0)]:(s=this.ptTile[this.sprTile[0]+(this.vertFlip[0]?0:1)+(0!=(1&this.sprTile[0])?255:0)],this.vertFlip[0]?i=15-i:i-=8),i*=8,this.sprCol[0],this.bgPriority[0],r=256*t+n,this.horiFlip[0])for(e=7;0<=e;e--){if(0<=n&&n<256&&0<=r&&r<61440&&0!==this.pixrendered[r]&&0!==s.pix[i+e])return this.spr0HitX=r%256,this.spr0HitY=t,!0;n++,r++}else for(e=0;e<8;e++){if(0<=n&&n<256&&0<=r&&r<61440&&0!==this.pixrendered[r]&&0!==s.pix[i+e])return this.spr0HitX=r%256,this.spr0HitY=t,!0;n++,r++}return!1},writeMem:function(t,i){this.vramMem[t]=i,t<8192?(this.vramMem[t]=i,this.patternWrite(t,i)):8192<=t&&t<9152?this.nameTableWrite(this.ntable1[0],t-8192,i):9152<=t&&t<9216?this.attribTableWrite(this.ntable1[0],t-9152,i):9216<=t&&t<10176?this.nameTableWrite(this.ntable1[1],t-9216,i):10176<=t&&t<10240?this.attribTableWrite(this.ntable1[1],t-10176,i):10240<=t&&t<11200?this.nameTableWrite(this.ntable1[2],t-10240,i):11200<=t&&t<11264?this.attribTableWrite(this.ntable1[2],t-11200,i):11264<=t&&t<12224?this.nameTableWrite(this.ntable1[3],t-11264,i):12224<=t&&t<12288?this.attribTableWrite(this.ntable1[3],t-12224,i):16128<=t&&t<16160&&this.updatePalettes()},updatePalettes:function(){for(var t=0;t<16;t++)0===this.f_dispType?this.imgPalette[t]=this.palTable.getEntry(63&this.vramMem[16128+t]):this.imgPalette[t]=this.palTable.getEntry(32&this.vramMem[16128+t]);for(t=0;t<16;t++)0===this.f_dispType?this.sprPalette[t]=this.palTable.getEntry(63&this.vramMem[16144+t]):this.sprPalette[t]=this.palTable.getEntry(32&this.vramMem[16144+t])},patternWrite:function(t,i){var s=Math.floor(t/16),e=t%16;e<8?this.ptTile[s].setScanline(e,i,this.vramMem[t+8]):this.ptTile[s].setScanline(e-8,this.vramMem[t-8],i)},nameTableWrite:function(t,i,s){this.nameTable[t].tile[i]=s,this.checkSprite0(this.scanline-20)},attribTableWrite:function(t,i,s){this.nameTable[t].writeAttrib(i,s)},spriteRamWriteUpdate:function(t,i){var s=Math.floor(t/4);0===s&&this.checkSprite0(this.scanline-20),t%4==0?this.sprY[s]=i:t%4==1?this.sprTile[s]=i:t%4==2?(this.vertFlip[s]=0!=(128&i),this.horiFlip[s]=0!=(64&i),this.bgPriority[s]=0!=(32&i),this.sprCol[s]=(3&i)<<2):t%4==3&&(this.sprX[s]=i)},doNMI:function(){this.setStatusFlag(this.STATUS_VBLANK,!0),this.nes.cpu.requestIrq(this.nes.cpu.IRQ_NMI)},JSON_PROPERTIES:["vramMem","spriteMem","cntFV","cntV","cntH","cntVT","cntHT","regFV","regV","regH","regVT","regHT","regFH","regS","vramAddress","vramTmpAddress","f_nmiOnVblank","f_spriteSize","f_bgPatternTable","f_spPatternTable","f_addrInc","f_nTblAddress","f_color","f_spVisibility","f_bgVisibility","f_spClipping","f_bgClipping","f_dispType","vramBufferedReadValue","firstWrite","currentMirroring","vramMirrorTable","ntable1","sramAddress","hitSpr0","sprPalette","imgPalette","curX","scanline","lastRenderedScanline","curNt","scantile","attrib","buffer","bgbuffer","pixrendered","requestEndFrame","nmiOk","dummyCycleToggle","nmiCounter","validTileData","scanlineAlreadyRendered"],toJSON:function(){var t,i=JSNES.Utils.toJSON(this);for(i.nameTable=[],t=0;t<this.nameTable.length;t++)i.nameTable[t]=this.nameTable[t].toJSON();for(i.ptTile=[],t=0;t<this.ptTile.length;t++)i.ptTile[t]=this.ptTile[t].toJSON();return i},fromJSON:function(t){var i;for(JSNES.Utils.fromJSON(this,t),i=0;i<this.nameTable.length;i++)this.nameTable[i].fromJSON(t.nameTable[i]);for(i=0;i<this.ptTile.length;i++)this.ptTile[i].fromJSON(t.ptTile[i]);for(i=0;i<this.spriteMem.length;i++)this.spriteRamWriteUpdate(i,this.spriteMem[i])}},JSNES.PPU.NameTable=function(t,i,s){this.width=t,this.height=i,this.name=s,this.tile=new Array(t*i),this.attrib=new Array(t*i)},JSNES.PPU.NameTable.prototype={getTileIndex:function(t,i){return this.tile[i*this.width+t]},getAttrib:function(t,i){return this.attrib[i*this.width+t]},writeAttrib:function(t,i){for(var s,e,r=t%8*4,h=4*Math.floor(t/8),n=0;n<2;n++)for(var l=0;l<2;l++)for(var a=i>>2*(2*n+l)&3,c=0;c<2;c++)for(var p=0;p<2;p++)e=h+2*n+c,this.width,s=r+2*l+p,this.attrib[e*this.width+s]=a<<2&12},toJSON:function(){return{tile:this.tile,attrib:this.attrib}},fromJSON:function(t){this.tile=t.tile,this.attrib=t.attrib}},JSNES.PPU.PaletteTable=function(){this.curTable=new Array(64),this.emphTable=new Array(8),this.currentEmph=-1},JSNES.PPU.PaletteTable.prototype={reset:function(){this.setEmphasis(0)},loadNTSCPalette:function(){this.curTable=[5395026,11796480,10485760,11599933,7602281,91,95,6208,12048,543240,26368,1196544,7153664,0,0,0,12899815,16728064,14421538,16729963,14090399,6818519,6588,21681,27227,35843,43776,2918400,10777088,0,0,0,16316664,16755516,16742785,16735173,16730354,14633471,4681215,46327,57599,58229,259115,7911470,15065624,7895160,0,0,16777215,16773822,16300216,16300248,16758527,16761855,13095423,10148607,8973816,8650717,12122296,16119980,16777136,16308472,0,0],this.makeTables(),this.setEmphasis(0)},loadPALPalette:function(){this.curTable=[5395026,11796480,10485760,11599933,7602281,91,95,6208,12048,543240,26368,1196544,7153664,0,0,0,12899815,16728064,14421538,16729963,14090399,6818519,6588,21681,27227,35843,43776,2918400,10777088,0,0,0,16316664,16755516,16742785,16735173,16730354,14633471,4681215,46327,57599,58229,259115,7911470,15065624,7895160,0,0,16777215,16773822,16300216,16300248,16758527,16761855,13095423,10148607,8973816,8650717,12122296,16119980,16777136,16308472,0,0],this.makeTables(),this.setEmphasis(0)},makeTables:function(){for(var t,i,s,e,r,h,n,l=0;l<8;l++)for(0!=((n=h=r=1)&l)&&(n=r=.75),0!=(2&l)&&(h=r=.75),0!=(4&l)&&(n=h=.75),this.emphTable[l]=new Array(64),e=0;e<64;e++)s=this.curTable[e],t=Math.floor(this.getRed(s)*r),i=Math.floor(this.getGreen(s)*h),s=Math.floor(this.getBlue(s)*n),this.emphTable[l][e]=this.getRgb(t,i,s)},setEmphasis:function(t){if(t!=this.currentEmph){this.currentEmph=t;for(var i=0;i<64;i++)this.curTable[i]=this.emphTable[t][i]}},getEntry:function(t){return this.curTable[t]},getRed:function(t){return t>>16&255},getGreen:function(t){return t>>8&255},getBlue:function(t){return 255&t},getRgb:function(t,i,s){return t<<16|i<<8|s},loadDefaultPalette:function(){this.curTable[0]=this.getRgb(117,117,117),this.curTable[1]=this.getRgb(39,27,143),this.curTable[2]=this.getRgb(0,0,171),this.curTable[3]=this.getRgb(71,0,159),this.curTable[4]=this.getRgb(143,0,119),this.curTable[5]=this.getRgb(171,0,19),this.curTable[6]=this.getRgb(167,0,0),this.curTable[7]=this.getRgb(127,11,0),this.curTable[8]=this.getRgb(67,47,0),this.curTable[9]=this.getRgb(0,71,0),this.curTable[10]=this.getRgb(0,81,0),this.curTable[11]=this.getRgb(0,63,23),this.curTable[12]=this.getRgb(27,63,95),this.curTable[13]=this.getRgb(0,0,0),this.curTable[14]=this.getRgb(0,0,0),this.curTable[15]=this.getRgb(0,0,0),this.curTable[16]=this.getRgb(188,188,188),this.curTable[17]=this.getRgb(0,115,239),this.curTable[18]=this.getRgb(35,59,239),this.curTable[19]=this.getRgb(131,0,243),this.curTable[20]=this.getRgb(191,0,191),this.curTable[21]=this.getRgb(231,0,91),this.curTable[22]=this.getRgb(219,43,0),this.curTable[23]=this.getRgb(203,79,15),this.curTable[24]=this.getRgb(139,115,0),this.curTable[25]=this.getRgb(0,151,0),this.curTable[26]=this.getRgb(0,171,0),this.curTable[27]=this.getRgb(0,147,59),this.curTable[28]=this.getRgb(0,131,139),this.curTable[29]=this.getRgb(0,0,0),this.curTable[30]=this.getRgb(0,0,0),this.curTable[31]=this.getRgb(0,0,0),this.curTable[32]=this.getRgb(255,255,255),this.curTable[33]=this.getRgb(63,191,255),this.curTable[34]=this.getRgb(95,151,255),this.curTable[35]=this.getRgb(167,139,253),this.curTable[36]=this.getRgb(247,123,255),this.curTable[37]=this.getRgb(255,119,183),this.curTable[38]=this.getRgb(255,119,99),this.curTable[39]=this.getRgb(255,155,59),this.curTable[40]=this.getRgb(243,191,63),this.curTable[41]=this.getRgb(131,211,19),this.curTable[42]=this.getRgb(79,223,75),this.curTable[43]=this.getRgb(88,248,152),this.curTable[44]=this.getRgb(0,235,219),this.curTable[45]=this.getRgb(0,0,0),this.curTable[46]=this.getRgb(0,0,0),this.curTable[47]=this.getRgb(0,0,0),this.curTable[48]=this.getRgb(255,255,255),this.curTable[49]=this.getRgb(171,231,255),this.curTable[50]=this.getRgb(199,215,255),this.curTable[51]=this.getRgb(215,203,255),this.curTable[52]=this.getRgb(255,199,255),this.curTable[53]=this.getRgb(255,199,219),this.curTable[54]=this.getRgb(255,191,179),this.curTable[55]=this.getRgb(255,219,171),this.curTable[56]=this.getRgb(255,231,163),this.curTable[57]=this.getRgb(227,255,163),this.curTable[58]=this.getRgb(171,243,191),this.curTable[59]=this.getRgb(179,255,207),this.curTable[60]=this.getRgb(159,255,243),this.curTable[61]=this.getRgb(0,0,0),this.curTable[62]=this.getRgb(0,0,0),this.curTable[63]=this.getRgb(0,0,0),this.makeTables(),this.setEmphasis(0)}},JSNES.PPU.Tile=function(){this.pix=new Array(64),this.fbIndex=null,this.tIndex=null,this.x=null,this.y=null,this.w=null,this.h=null,this.incX=null,this.incY=null,this.palIndex=null,this.tpri=null,this.c=null,this.initialized=!1,this.opaque=new Array(8)},JSNES.PPU.Tile.prototype={setBuffer:function(t){for(this.y=0;this.y<8;this.y++)this.setScanline(this.y,t[this.y],t[this.y+8])},setScanline:function(t,i,s){for(this.initialized=!0,this.tIndex=t<<3,this.x=0;this.x<8;this.x++)this.pix[this.tIndex+this.x]=(i>>7-this.x&1)+((s>>7-this.x&1)<<1),0===this.pix[this.tIndex+this.x]&&(this.opaque[t]=!1)},render:function(t,i,s,e,r,h,n,l,a,c,p,b,d){if(!(h<-7||256<=h||n<-7||240<=n))if(this.w=e-i,this.h=r-s,h<0&&(i-=h),256<=h+e&&(e=256-h),n<0&&(s-=n),240<=n+r&&(r=240-n),c||p)if(c&&!p)for(this.fbIndex=(n<<8)+h,this.tIndex=7,this.y=0;this.y<8;this.y++){for(this.x=0;this.x<8;this.x++)this.x>=i&&this.x<e&&this.y>=s&&this.y<r&&(this.palIndex=this.pix[this.tIndex],this.tpri=d[this.fbIndex],0!==this.palIndex&&b<=(255&this.tpri)&&(t[this.fbIndex]=a[this.palIndex+l],this.tpri=3840&this.tpri|b,d[this.fbIndex]=this.tpri)),this.fbIndex++,this.tIndex--;this.fbIndex-=8,this.fbIndex+=256,this.tIndex+=16}else if(p&&!c)for(this.fbIndex=(n<<8)+h,this.tIndex=56,this.y=0;this.y<8;this.y++){for(this.x=0;this.x<8;this.x++)this.x>=i&&this.x<e&&this.y>=s&&this.y<r&&(this.palIndex=this.pix[this.tIndex],this.tpri=d[this.fbIndex],0!==this.palIndex&&b<=(255&this.tpri)&&(t[this.fbIndex]=a[this.palIndex+l],this.tpri=3840&this.tpri|b,d[this.fbIndex]=this.tpri)),this.fbIndex++,this.tIndex++;this.fbIndex-=8,this.fbIndex+=256,this.tIndex-=16}else for(this.fbIndex=(n<<8)+h,this.tIndex=63,this.y=0;this.y<8;this.y++){for(this.x=0;this.x<8;this.x++)this.x>=i&&this.x<e&&this.y>=s&&this.y<r&&(this.palIndex=this.pix[this.tIndex],this.tpri=d[this.fbIndex],0!==this.palIndex&&b<=(255&this.tpri)&&(t[this.fbIndex]=a[this.palIndex+l],this.tpri=3840&this.tpri|b,d[this.fbIndex]=this.tpri)),this.fbIndex++,this.tIndex--;this.fbIndex-=8,this.fbIndex+=256}else for(this.fbIndex=(n<<8)+h,this.tIndex=0,this.y=0;this.y<8;this.y++){for(this.x=0;this.x<8;this.x++)this.x>=i&&this.x<e&&this.y>=s&&this.y<r&&(this.palIndex=this.pix[this.tIndex],this.tpri=d[this.fbIndex],0!==this.palIndex&&b<=(255&this.tpri)&&(t[this.fbIndex]=a[this.palIndex+l],this.tpri=3840&this.tpri|b,d[this.fbIndex]=this.tpri)),this.fbIndex++,this.tIndex++;this.fbIndex-=8,this.fbIndex+=256}},isTransparent:function(t,i){return 0===this.pix[(i<<3)+t]},toJSON:function(){return{opaque:this.opaque,pix:this.pix}},fromJSON:function(t){this.opaque=t.opaque,this.pix=t.pix}};