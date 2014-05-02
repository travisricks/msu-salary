<script>
    (function($) {
        $(function() {
            $('#panel-container').on('click', '.panel-nav', function(e, el) {
                e.preventDefault();

                var url = $(el).attr('href');

                $.get(url, function(data) {
                    $('#panel-container .panel').remove();
                    $('#panel-container').append(data);
                });
            });
        });
    })(jQuery);
</script>

<div id="panel-container">
    <a href="step-x.html">Step X</a>
</div>

<div class="panel">

</div>