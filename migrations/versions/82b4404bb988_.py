"""empty message

Revision ID: 82b4404bb988
Revises: 
Create Date: 2024-06-18 18:45:23.660213

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '82b4404bb988'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('action',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('lab_id', sa.String(length=80), nullable=False),
    sa.Column('product', sa.String(length=80), nullable=True),
    sa.Column('action_name', sa.String(length=80), nullable=True),
    sa.Column('title', sa.String(length=80), nullable=True),
    sa.Column('price', sa.String(length=80), nullable=True),
    sa.Column('percentages', sa.String(length=80), nullable=True),
    sa.Column('overall_rating', sa.String(length=20), nullable=True),
    sa.Column('current_rating', sa.Integer(), nullable=True),
    sa.Column('number_of_reviews', sa.String(length=80), nullable=True),
    sa.Column('review_id', sa.Integer(), nullable=True),
    sa.Column('other_reviews', sa.String(length=80), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('distribution',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('lab_id', sa.String(length=80), nullable=False),
    sa.Column('product_1_ar', sa.String(length=255), nullable=False),
    sa.Column('product_2_ar', sa.String(length=255), nullable=False),
    sa.Column('product_3_ar', sa.String(length=255), nullable=False),
    sa.Column('product_4_ar', sa.String(length=255), nullable=False),
    sa.Column('product_1_tr', sa.String(length=255), nullable=False),
    sa.Column('product_2_tr', sa.String(length=255), nullable=False),
    sa.Column('product_3_tr', sa.String(length=255), nullable=False),
    sa.Column('product_4_tr', sa.String(length=255), nullable=False),
    sa.Column('rating_scale_product_1_2', sa.Boolean(), nullable=True),
    sa.Column('rating_scale_product_3_4', sa.Boolean(), nullable=True),
    sa.Column('volume_product_1_2', sa.Boolean(), nullable=True),
    sa.Column('volume_product_3_4', sa.Boolean(), nullable=True),
    sa.Column('number_of_reviews_product_1', sa.Integer(), nullable=True),
    sa.Column('number_of_reviews_product_2', sa.Integer(), nullable=True),
    sa.Column('number_of_reviews_product_3', sa.Integer(), nullable=True),
    sa.Column('number_of_reviews_product_4', sa.Integer(), nullable=True),
    sa.Column('overall_rating_product_1', sa.Numeric(precision=10, scale=1), nullable=True),
    sa.Column('overall_rating_product_2', sa.Numeric(precision=10, scale=1), nullable=True),
    sa.Column('overall_rating_product_3', sa.Numeric(precision=10, scale=1), nullable=True),
    sa.Column('overall_rating_product_4', sa.Numeric(precision=10, scale=1), nullable=True),
    sa.Column('star_1_per_product_1', sa.Integer(), nullable=True),
    sa.Column('star_2_per_product_1', sa.Integer(), nullable=True),
    sa.Column('star_3_per_product_1', sa.Integer(), nullable=True),
    sa.Column('star_4_per_product_1', sa.Integer(), nullable=True),
    sa.Column('star_5_per_product_1', sa.Integer(), nullable=True),
    sa.Column('star_1_per_product_2', sa.Integer(), nullable=True),
    sa.Column('star_2_per_product_2', sa.Integer(), nullable=True),
    sa.Column('star_3_per_product_2', sa.Integer(), nullable=True),
    sa.Column('star_4_per_product_2', sa.Integer(), nullable=True),
    sa.Column('star_5_per_product_2', sa.Integer(), nullable=True),
    sa.Column('star_1_per_product_3', sa.Integer(), nullable=True),
    sa.Column('star_2_per_product_3', sa.Integer(), nullable=True),
    sa.Column('star_3_per_product_3', sa.Integer(), nullable=True),
    sa.Column('star_4_per_product_3', sa.Integer(), nullable=True),
    sa.Column('star_5_per_product_3', sa.Integer(), nullable=True),
    sa.Column('star_1_per_product_4', sa.Integer(), nullable=True),
    sa.Column('star_2_per_product_4', sa.Integer(), nullable=True),
    sa.Column('star_3_per_product_4', sa.Integer(), nullable=True),
    sa.Column('star_4_per_product_4', sa.Integer(), nullable=True),
    sa.Column('star_5_per_product_4', sa.Integer(), nullable=True),
    sa.Column('price_product_1', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('price_product_2', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('price_product_3', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('price_product_4', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('lab_id')
    )
    op.create_table('item',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=255), nullable=False),
    sa.Column('description', sa.String(length=255), nullable=True),
    sa.Column('price', sa.String(length=10), nullable=True),
    sa.Column('lower_price', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('higher_price', sa.Numeric(precision=10, scale=2), nullable=True),
    sa.Column('popular', sa.Boolean(), nullable=True),
    sa.Column('imageurl', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('response',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('html_file_name', sa.String(length=80), nullable=False),
    sa.Column('comment_number', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('username')
    )
    op.create_table('round',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('round_number', sa.Integer(), nullable=False),
    sa.Column('promotion_type', sa.String(length=50), nullable=True),
    sa.Column('promotion_value', sa.Float(), nullable=True),
    sa.Column('item_order', sa.String(length=255), nullable=False),
    sa.Column('item_prices', sa.String(length=1200), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('round_id', sa.Integer(), nullable=False),
    sa.Column('quantity', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['round_id'], ['round.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cart')
    op.drop_table('round')
    op.drop_table('user')
    op.drop_table('response')
    op.drop_table('item')
    op.drop_table('distribution')
    op.drop_table('action')
    # ### end Alembic commands ###
