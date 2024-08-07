"""empty message

Revision ID: 0f6e04961aa4
Revises: d99682a9350a
Create Date: 2024-06-24 16:56:20.268376

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0f6e04961aa4'
down_revision = 'd99682a9350a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('round', schema=None) as batch_op:
        batch_op.add_column(sa.Column('fixed_spend', sa.Float(), nullable=True))
        batch_op.add_column(sa.Column('fixed_save', sa.Float(), nullable=True))
        batch_op.add_column(sa.Column('percentage_off', sa.Float(), nullable=True))
        batch_op.add_column(sa.Column('percentage_upto', sa.Float(), nullable=True))
        batch_op.drop_column('promotion_value')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('round', schema=None) as batch_op:
        batch_op.add_column(sa.Column('promotion_value', sa.DOUBLE_PRECISION(precision=53), autoincrement=False, nullable=True))
        batch_op.drop_column('percentage_upto')
        batch_op.drop_column('percentage_off')
        batch_op.drop_column('fixed_save')
        batch_op.drop_column('fixed_spend')

    # ### end Alembic commands ###
