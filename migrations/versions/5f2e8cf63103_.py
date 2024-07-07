"""empty message

Revision ID: 5f2e8cf63103
Revises: 320638569ad6
Create Date: 2024-06-19 04:34:46.989221

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5f2e8cf63103'
down_revision = '320638569ad6'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart_item', schema=None) as batch_op:
        batch_op.drop_constraint('cart_item_item_id_fkey', type_='foreignkey')
        batch_op.drop_column('item_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart_item', schema=None) as batch_op:
        batch_op.add_column(sa.Column('item_id', sa.INTEGER(), autoincrement=False, nullable=False))
        batch_op.create_foreign_key('cart_item_item_id_fkey', 'item', ['item_id'], ['id'])

    # ### end Alembic commands ###