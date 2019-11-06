$(document).on('turbolinks:load', function() {
  $('#title1').textillate({
    selector: 'texts',
    loop: true,
    autoStart: true,
    inEffects: [],
    minDisplayTime: 3000,
    initialDelay: 2000,

    in: {
      effect: 'flipInX',
      delayScale: 1.5,
      delay: 60,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    }
  });
  $('#title2').textillate({
    selector: 'texts',
    loop: true,
    autoStart: true,
    inEffects: [],
    minDisplayTime: 3000,
    initialDelay: 2000,

    in: {
      effect: 'flipInX',
      delayScale: 1.5,
      delay: 60,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    }
  });
  $('#title3').textillate({
    selector: 'texts',
    loop: true,
    autoStart: true,
    inEffects: [],
    minDisplayTime: 3000,
    initialDelay: 2000,

    in: {
      effect: 'flipInX',
      delayScale: 1.5,
      delay: 60,
      sync: false,
      shuffle: false,
      reverse: false,
      callback: function () {}
    }
  });
});