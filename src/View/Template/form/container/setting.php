<!--.grid, Field Modal Size-->
<div class="grid grid-cols-5 gap-4 py-4">
    <div class="font-medium text-gray-600 pt-2">
        <label <?php echo isset($args['label']['id']) ? esc_attr( sprintf('for="field_%s"', $args['label']['id'] ) ) : ''; ?>>
            <?php echo esc_attr( $args['label']['text'] ); ?>
        </label>
    </div>
    <div class="col-span-4">
        <div class="flex"><?php echo do_shortcode( $content ); ?></div>
        <?php if(isset($args['info'])): ?>
        <div class="text-gray-400 mt-2 field-info">
            <em><?php echo do_shortcode( $args['info'] ); ?></em>
        </div>
        <?php endif; ?>
    </div>
</div><!--.grid-->