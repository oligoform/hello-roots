<section class="c-archive">

	<div class="c-archive__content c-loop c-constraint">

		<header class="c-archive__header">
			<?php the_archive_title('<h1 class="c-archive__title">', '</h1>'); ?>
		</header>

		<div class="c-archive__entries c-loop__entries">
			<?php
			if (have_posts()) {
				while (have_posts()) {
					the_post();
					get_template_part('partials/loopentry', get_post_type());
				}
			}
			?>
		</div>

		<?php
		$paginate = paginate_links();
		if ('' !== $paginate) {
			printf('<div class="c-archive__pagination c-pagination">
				<div class="c-archive__paginationcontent c-pagination__content">%s</div>
			</div>', $paginate);
		}
		?>
	</div>

</section>
