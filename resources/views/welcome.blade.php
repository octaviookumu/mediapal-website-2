<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    {{-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> --}}
    {{-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> --}}
    {{-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> --}}
    {{-- <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/> --}}
    {{-- <meta name="viewport" content="width=device-width, user-scalable=no" /> --}}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="logo.png" type="image/x-icon">
    
    <link rel="icon" type="image/x-icon" href="../../public/pal-alone.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="../../public/favicon_io//apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="../../public/favicon_io//favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../../public/favicon_io//favicon-16x16.png">
{{-- <link rel="manifest" href="/site.webmanifest"> --}}
    {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}" /> --}}

    {{-- <link href="https://fonts.googleapis.com/css?family=Quicksand:400,600,700&display=swap" rel="stylesheet"> --}}

    {{-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">  --}}

{{-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"> --}}

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet">

{{-- <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">  --}}


    <link rel="stylesheet" href="{{ asset('css/owl.carousel.min.css') }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>

    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">

    <script src="https://vjs.zencdn.net/5.4.6/video.js"></script>


    <script src="https://unpkg.com/scrollreveal"></script>
    

    <!-- Icons -->
    <link rel="stylesheet" href="{{ asset('fonts/icomoon/style.css') }}">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">

    <link rel="stylesheet" href="{{ asset('css/brigadiersans/stylesheet.css') }}" type="text/css" charset="utf-8" />
    
    <!-- Style -->
    <link rel="stylesheet" href="{{  asset('css/app.css') }}">
    <link rel="stylesheet" href="{{  asset('css/nav.css') }}">
    <link rel="stylesheet" href="{{  asset('css/contact.css') }}">

    <link rel="shortcut icon" type="image/png" href="{{ asset('pal-alone.ico') }}"/>

    <title>{{env('APP_NAME')}}</title>
</head>
<body>
    <div id="app">
        <app></app>
    </div>

    <script src='{{ asset('js/jquery-3.3.1.min.js') }}'></script>
    <script src="{{ asset('js/popper.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap.min.js') }}"></script>
    <script src="{{  asset('js/jquery.sticky.js')  }}"></script>
    <script src="{{  asset('js/main.js') }}"></script>
    <script src="{{  asset('js/owl.carousel.min.js') }}"></script>
    <script src="{{  asset('js/jquery.validate.min.js') }}"></script>
    <script src="{{  asset('js/BigPicture.js') }}"></script>
    {{-- <script src="{{  asset('js/gsap/ScrollTrigger.min.js') }}"></script> --}}

    <script src="{{ mix('js/app.js') }}"></script>

    <!-- jQuery JS -->
    {{-- <script src="assets/js/vendor/jquery.js"></script> --}}
</body>
</html>