<?php
/**
 * Metabox Design
 *
 * @package FAB
 */
?>

<!-- START: ".fab-container" -->
<div class="fab-container metabox-design">

    <?php
        $this->setTemplate( 'backend.optiontab' );
        $this->setSections(
            array(
                'Backend.Metabox.tab-design.button' => array(
                    'name'   => 'Button',
                    'active' => true,
                    'target' => 'design-button',
                ),
                'Backend.Metabox.tab-design.modal' => array(
                    'name'   => 'Modal',
                    'active' => false,
                    'target'   => 'design-modal',
                ),
            )
        );
        $this->setData(array(
            'fab' => $fab,
            'options' => $options,
            'optionTab' => 'optionTabDesign',
        ));
        $this->setOptions( array( 'shortcode' => false ) );
        $this->build();
    ?>

</div>
<!-- END: ".fab-container" -->

<script type="text/javascript">
    jQuery(function($) {
        window.FAB_METABOX_DESIGN.init();
    });
</script>