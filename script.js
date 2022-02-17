var t=0, timeout;
function startWatch()
{
  document.getElementById('btn').innerHTML='Stop';
  document.getElementById('btn').setAttribute('onclick','stopTime()');
  startTime();
}
function startTime()
{
  t=t+1;
  var time=timeformat(t);
  document.getElementById('time').innerHTML=time;
  timeout=setTimeout(startTime,1000);
}
function timeformat()
{
  var h=Math.floor(t/(60*60));
  var m=Math.floor((t%(60*60))/60);
  var s=Math.floor((t%(60*60))%60);
  if(h<10)
  h="0"+h;
  if(m<10)
  m="0"+m;
  if(s<10)
  s="0"+s;

  return h+":"+m+":"+s;
}
function stopTime()
{
  clearTimeout(timeout);
  document.getElementById('btn').innerHTML='Resume';
  document.getElementById('btn').setAttribute('onclick','startWatch()');
}
function resetWatch()
{
  clearTimeout(timeout);
  t=0;
  document.getElementById('time').innerHTML='00:00:00';
  document.getElementById('btn').innerHTML='Start';
  document.getElementById('btn').setAttribute('onclick','startWatch()');
}
