<!--float button-->
<div class="fab-container" style="display:none;">
    <div id="fab-dom" class="
		fab-floating-button
		fab-template-<?php echo esc_attr( $options->fab_design->template->name ); ?> <?php echo ($options->fab_design->template->shape) ? esc_attr( sprintf('fab-template-shape-container-%s', $options->fab_design->template->shape) ) : ''; ?>
		fab-position-<?php echo esc_attr( $options->fab_design->layout->position ); ?>">
    </div>
</div><!--.fab-container-->