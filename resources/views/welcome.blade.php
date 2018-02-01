@extends('layouts.app')

@section('content')
    <footer class="navbar navbar-text navbar-fixed-bottom">
          <div style=" display: flex; justify-content: center">

            <span><h1 style=" font-size: 4cm; font-family:italic">
            {{--    $ @{{keeps[0].resulta }}--}}

                    @{{ animatedNumber }}
          </h1></span>

            <money v-model="animatedNumber" v-bind="money" hidden> @{{animatedNumber}}</money>
        </div>

    </footer>
@endsection

