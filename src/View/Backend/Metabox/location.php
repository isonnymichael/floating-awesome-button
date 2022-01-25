<?php
/**
 * Metabox Location
 *
 * @package FAB
 */
?>

<!-- START: .fab-container  -->
<div class="fab-container metabox-location">

    <!-- metabox title -->
    <div class="font-medium text-gray-600 pt-2 col-span-5">
        Rules
        <div class="text-gray-400">
            <em class="field-info">
                Create a set of rules...
            </em>
        </div>
    </div>
    <div class="text-gray-400">
        <em class="field-info">
            Show If:
        </em>
    </div>

    <div id="fab-metabox-locations"></div>

</div>
<script type="text/javascript">
    jQuery(function($) {
        window.FAB_METABOX_LOCATION.init();
        jQuery( "#fab-location-rules" ).sortable();
    });
</script>