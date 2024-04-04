"""empty message

Revision ID: b99e3c893e1b
Revises: 27493b5e13ac
Create Date: 2024-03-26 17:14:38.906231

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b99e3c893e1b'
down_revision = '27493b5e13ac'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('action', schema=None) as batch_op:
        batch_op.add_column(sa.Column('title', sa.String(length=80), nullable=True))
        batch_op.add_column(sa.Column('percentages', sa.String(length=80), nullable=True))
        batch_op.add_column(sa.Column('overall_rating', sa.String(length=20), nullable=True))
        batch_op.drop_column('product_name')
        batch_op.drop_column('rating_dist')
        batch_op.drop_column('rating_number')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('action', schema=None) as batch_op:
        batch_op.add_column(sa.Column('rating_number', sa.VARCHAR(length=20), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('rating_dist', sa.VARCHAR(length=80), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('product_name', sa.VARCHAR(length=80), autoincrement=False, nullable=True))
        batch_op.drop_column('overall_rating')
        batch_op.drop_column('percentages')
        batch_op.drop_column('title')

    # ### end Alembic commands ###
