import discord
from discord.ext import commands
from discord.member import Member


class Admin(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="청소")
    async def clear(self, ctx, amount=5):
        global user
        global permission
        permission = (ctx.author.guild_permissions.administrator)
        user = ctx.author

        if permission is True:
            await ctx.channel.purge(limit=amount)
            embed = discord.Embed(color=0x00FF21, title="채팅청소", description=f"관리자 {user.name}님이 채팅{amount}개 채팅청소를 했습니다")
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

        if permission is False:
            embed = discord.Embed(color=0x00FF21, title="채팅청소", description=f"{user.name}님, 권한이 없어서 해당작업을 수행하지 못했습니다.")
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="킥")
    async def kick(self, ctx, member : discord.Member, *, reason=None):

        if permission is True:
            embed = discord.Embed(color=0x00FF21, title="멤버 추방", description=f"관리자 {user.name}님의 요청으로 {member}(이)가 추방되었습니다.")
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await member.kick(reason=reason)
            await ctx.send(embed=embed)
            
        if permission is False:
            embed = discord.Embed(color=0x00FF21, title="멤버 추방", description=f"{user.name}님, 해당작업은 관리자 권한을 가져야만 가능 합니다.")
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="밴")
    async def ban(self, ctx, member : discord.Member, *, reason=None):

        if permission is True:
            embed = discord.Embed(color=0x00FF21, title="멤버 차단", description=f"관리자 {user.name}님의 요청으로 {member}(이)가 차단되었습니다.")
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await member.ban(reason=reason)
            await ctx.send(embed=embed)
            
        if permission is False:
            embed = discord.Embed(color=0x00FF21, title="멤버 차단", description=f"{user.name}님, 해당작업은 관리자 권한을 가져야만 가능 합니다.")
            embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            await ctx.send(embed=embed)

    @commands.command(name="테스트", help="TEST")
    async def test(self, ctx, member : discord.Member):
        test = member("<@415135882006495242>")
        await ctx.send(discord.Member("<@415135882006495242>"), "야")


def setup(bot):
    bot.add_cog(Admin(bot))