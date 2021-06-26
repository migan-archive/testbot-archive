import discord, random, asyncio, time
from discord.ext import commands
from Dtime import Uptime
import datetime


Uptime.uptimeset()
class Core(commands.Cog):
    def __init__(self, bot):
        self.bot = bot

    @commands.command(name="핑", help="이봇의 핑을 알려줍니다.")
    async def ping(self, ctx):
        before = time.monotonic()
        message = await ctx.reply("Loding")
        ping = (time.monotonic() - before) * 1000
        embed = discord.Embed(color=0x00FF21, title=":ping_pong:퐁!",  description=f"{int(ping)}ms")
        embed.set_footer(text="bot made by. #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await message.edit(embed=embed)

    @commands.command(name="따라해")
    async def text(self, ctx, *, text):
        Mentions = discord.AllowedMentions(everyone=False, users=False)
        if  Mentions:
            await ctx.send("해당메세지엔 에브리원이 들어가있어 불가합니다.")
        else:
            await ctx.send(text)

    @commands.command(name="안녕")
    async def Hello(self, ctx):
        user = ctx.author
        await ctx.send(random.choice(['안녕', 'hi', '안녕하세요', 'hello', f'{user.name}님 안녕하세요!']))

    @commands.command(name="놀자")
    async def joy(self, ctx):
        await ctx.send(random.choice(['바빠', '뭐하고 놀건데?']))

    @commands.command()
    async def 바보(self, ctx):
        await ctx.send("@Commander")

    @commands.command(name="업타임")
    async def uptime(self, ctx):
        user = ctx.author
        uptime = str(Uptime.uptime()).split(":")
        hours = uptime[0]
        minitues = uptime[1]
        seconds = uptime[2].split(".")[0]
        embed = discord.Embed(color = 0x00FF21, title=":up:업타임", description=f"현재 업타임은 {hours}시간 {minitues}분 {seconds}초 입니다.")
        time = datetime.datetime.utcnow() + 9
        embed.set_footer(text=time, icon_url=ctx.author.avatar_url)
        await ctx.send(embed=embed)

    @commands.command(name="내프로필")
    async def myprofile(self, ctx):
        await ctx.send("Loding...")
        await asyncio.sleep(10)
        user = ctx.author
        date = datetime.datetime.utcfromtimestamp(((int(user.id) >> 22) + 1420070400000) / 1000)
        embed = discord.Embed(color=0x00FF21, title=f"{user.name}님의 프로필")
        embed.set_thumbnail(url=ctx.author.avatar_url)
        embed.add_field(name='```가입일```', value=f'{date.year}년{date.month}월{date.day}일', inline=False)
        embed.add_field(name='이름', value=f'{user.name}', inline=False)
        embed.add_field(name='아이디', value=f'{user.id}')
        embed.add_field(name='닉네임', value=f'{user.display_name}', inline=False)
        embed.add_field(name='상태', value=f'{user.status}')
        embed.set_footer(text="봇만든이 미간 #8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await ctx.send(embed=embed)

    @commands.command(name="서버수", help="이봇이 들어간 서버수를 알려줍니다.")
    async def server(self, ctx):
        message = await ctx.reply("Loading")
        embed = discord.Embed(color=0x00FF21, title="Kubot의 서버수", description=f"현재 Kubot의 서버수는 {len(self.bot.guilds)}서버 입니다.\n현재 한디리에서 Kubot서버가 1서버로 표기되고있습니다.")
        embed.set_footer(text="bot made by. 미간#8269", icon_url="https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        await message.edit(embed=embed)


def setup(bot):
    bot.add_cog(Core(bot))